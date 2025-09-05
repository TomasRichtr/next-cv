import {
  Pool,
} from "pg";

import {
  Migration,
} from "../migrations";

export const createInitialTablesMigration: Migration = {
  id: "000_create_initial_tables",
  name: "Create initial tables",
  up: async (db: Pool) => {
    await db.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email TEXT UNIQUE,
        password TEXT
      );
    `);

    await db.query(`
      CREATE TABLE IF NOT EXISTS sessions (
        id TEXT NOT NULL PRIMARY KEY,
        expires_at BIGINT NOT NULL,
        user_id INTEGER NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id)
      );
    `);

    await db.query(`
      CREATE TABLE IF NOT EXISTS data (
        id SERIAL PRIMARY KEY
      );
    `);

    console.log("Created initial tables: users, sessions, data");
  },
  down: async (db: Pool) => {
    await db.query("DROP TABLE IF EXISTS sessions;");
    await db.query("DROP TABLE IF EXISTS users;");
    await db.query("DROP TABLE IF EXISTS data;");
  },
};
