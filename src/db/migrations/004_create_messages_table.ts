import {
  Pool,
} from "pg";

import {
  Migration,
} from "../migrations";

export const createMessagesTableMigration: Migration = {
  id: "004_create_messages_table",
  name: "create_messages_table",
  up: async (db: Pool) => {
    await db.query(`
      CREATE TABLE messages (
        id SERIAL PRIMARY KEY,
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
  down: async (db: Pool) => {
    await db.query("DROP TABLE IF EXISTS messages");
  },
};
