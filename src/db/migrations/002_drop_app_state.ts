import {
  Pool,
} from "pg";

import {
  Migration,
} from "../migrations";

export const dropAppStateMigration: Migration = {
  id: "002_drop_app_state",
  name: "Drop app_state table",
  up: async (db: Pool) => {
    await db.query("DROP TABLE IF EXISTS app_state;");
  },
  down: async (db: Pool) => {
    await db.query(`
      CREATE TABLE IF NOT EXISTS app_state (
        key TEXT PRIMARY KEY,
        value TEXT
      );
    `);
  },
};
