import {
  Pool,
} from "pg";

import {
  UserRole,
} from "@/types/user";

import {
  Migration,
} from "../migrations";

export const addUserRoleMigration: Migration = {
  id: "001_add_user_role",
  name: "add_user_role_column",
  up: async (db: Pool) => {
    // Check if role column already exists
    const result = await db.query(`
      SELECT column_name 
      FROM information_schema.columns 
      WHERE table_name = 'users' AND column_name = 'role'
    `);
    const hasRoleColumn = result.rows.length > 0;

    if (!hasRoleColumn) {
      await db.query(`ALTER TABLE users ADD COLUMN role TEXT DEFAULT '${UserRole.User}'`);
      await db.query(`UPDATE users SET role = '${UserRole.User}' WHERE role IS NULL`);
      console.log("Added role column to users table");
    } else {
      console.log("Role column already exists, skipping");
    }
  },
  down: async () => {
    console.log("Warning: Reversing this migration requires manual intervention");
  },
};
