import sql from "better-sqlite3";

import {
  Migration,
} from "../migrations";

export const dropAppStateMigration: Migration = {
  id: "002_drop_app_state",
  name: "Drop app_state table",
  up: (db: sql.Database) => {
    db.exec("DROP TABLE IF EXISTS app_state;");
  },
  down: (db: sql.Database) => {
    db.exec(`
      CREATE TABLE IF NOT EXISTS app_state (
        key TEXT PRIMARY KEY,
        value TEXT
      );
    `);
  },
};
