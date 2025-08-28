import sql from "better-sqlite3";

import {
  UserRole,
} from "@/types/user";
import {
  hashUserPassword,
} from "@/utils/hash";

const db = sql("data.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    email TEXT UNIQUE,
    password TEXT,
    role TEXT DEFAULT 'user'
  );
`);

db.exec(`CREATE TABLE IF NOT EXISTS sessions (
  id TEXT NOT NULL PRIMARY KEY,
  expires_at INTEGER NOT NULL,
  user_id TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
)`);

db.exec(`
  CREATE TABLE IF NOT EXISTS app_state (
    key TEXT PRIMARY KEY,
    value TEXT
  );
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS data (
    id INTEGER PRIMARY KEY
  );
`);

const initState = db.prepare("SELECT value FROM app_state WHERE key = ?").get("initialized") as { value: string } | undefined;

if (!initState || initState.value !== "true") {
  const hasData = (db.prepare("SELECT COUNT(*) as count FROM data").get() as { count: number }).count > 0;

  if (!hasData) {
    db.exec(`
      INSERT INTO data (id)
      VALUES
      (1),
      (2),
      (3),
      (4),
      (5),
      (6),
      (7);
    `);
  }

  const adminEmail = process.env.ADMIN_USER_EMAIL;
  const adminPassword = process.env.ADMIN_USER_PASSWORD;

  if (adminEmail && adminPassword) {
    const existingAdmin = db.prepare("SELECT * FROM users WHERE email = ?").get(adminEmail);

    if (!existingAdmin) {
      const hashedPassword = hashUserPassword(adminPassword);
      db.prepare("INSERT INTO users (email, password, role) VALUES (?, ?, ?)")
        .run(adminEmail, hashedPassword, UserRole.Admin);
    }
  }

  db.prepare("INSERT OR REPLACE INTO app_state (key, value) VALUES (?, ?)").run("initialized", "true");
}

export default db;
