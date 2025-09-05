import {
  Pool,
} from "pg";

import {
  Migration,
} from "../migrations";

export const createReferencesTableMigration: Migration = {
  id: "003_create_references_table",
  name: "Create references table",
  up: async (db: Pool) => {
    await db.query(`
      CREATE TABLE IF NOT EXISTS "references" (
        id SERIAL PRIMARY KEY,
        reference TEXT NOT NULL,
        user_id INTEGER NOT NULL UNIQUE,
        date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        display INTEGER DEFAULT 0
      );
    `);
  },
  down: async (db: Pool) => {
    await db.query("DROP TABLE IF EXISTS \"references\";");
  },
};
