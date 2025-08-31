import sql from "better-sqlite3";

import {
  Migration,
} from "../migrations";

export const createReferencesTableMigration: Migration = {
  id: "003_create_references_table",
  name: "Create references table",
  up: (db: sql.Database) => {
    db.exec(`
      CREATE TABLE IF NOT EXISTS [references] (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        reference TEXT NOT NULL,
        user_id INTEGER NOT NULL UNIQUE,
        date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        display INTEGER DEFAULT 0
      );
    `);
  },
  down: (db: sql.Database) => {
    db.exec("DROP TABLE IF EXISTS [references];");
  },
};
