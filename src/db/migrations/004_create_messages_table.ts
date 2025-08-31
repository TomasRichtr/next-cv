import sql from "better-sqlite3";

import {
  Migration,
} from "../migrations";

export const createMessagesTableMigration: Migration = {
  id: "004_create_messages_table",
  name: "create_messages_table",
  up: (db: sql.Database) => {
    db.exec(`
      CREATE TABLE messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        user_id INTEGER,
        company_name TEXT,
        email TEXT NOT NULL,
        phone TEXT,
        message TEXT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users (id)
      )
    `);
  },
  down: (db: sql.Database) => {
    db.exec("DROP TABLE IF EXISTS messages");
  },
};
