import {
  Pool,
} from "pg";

import {
  Migration,
} from "../migrations";

export const createSessionsTableMigration: Migration = {
  id: "005_create_sessions_table",
  name: "Create sessions table for Lucia auth",
  up: async (db: Pool) => {
    await db.query(`
      CREATE TABLE IF NOT EXISTS sessions (
        id TEXT PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        expires_at BIGINT NOT NULL
      );
    `);

    // Add index for better performance
    await db.query(`
      CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON sessions(user_id);
    `);

    // Add index for cleanup of expired sessions
    await db.query(`
      CREATE INDEX IF NOT EXISTS idx_sessions_expires_at ON sessions(expires_at);
    `);
  },
  down: async (db: Pool) => {
    await db.query("DROP TABLE IF EXISTS sessions;");
  },
};
