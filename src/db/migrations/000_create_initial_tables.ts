import sql from "better-sqlite3";

import {
  Migration,
} from "../migrations";

export const createInitialTablesMigration: Migration = {
  id: "000_create_initial_tables",
  name: "Create initial tables",
  up: (db: sql.Database) => {
    db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        email TEXT UNIQUE,
        password TEXT
      );
    `);

    db.exec(`
      CREATE TABLE IF NOT EXISTS sessions (
        id TEXT NOT NULL PRIMARY KEY,
        expires_at INTEGER NOT NULL,
        user_id TEXT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id)
      );
    `);

    db.exec(`
      CREATE TABLE IF NOT EXISTS data (
        id INTEGER PRIMARY KEY
      );
    `);

    console.log("Created initial tables: users, sessions, data");
  },
  down: (db: sql.Database) => {
    db.exec("DROP TABLE IF EXISTS sessions;");
    db.exec("DROP TABLE IF EXISTS users;");
    db.exec("DROP TABLE IF EXISTS data;");
  },
};
