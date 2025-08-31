import {
  UserRole,
} from "@/types/user";

import {
  Migration,
} from "../migrations";

export const addUserRoleMigration: Migration = {
  id: "001_add_user_role",
  name: "add_user_role_column",
  up: (db) => {
    // Check if role column already exists
    const columns = db.prepare("PRAGMA table_info(users)").all() as Array<{ name: string }>;
    const hasRoleColumn = columns.some(col => col.name === "role");

    if (!hasRoleColumn) {
      db.exec(`ALTER TABLE users ADD COLUMN role TEXT DEFAULT '${UserRole.User}'`);
      db.exec(`UPDATE users SET role = '${UserRole.User}' WHERE role IS NULL`);
      console.log("Added role column to users table");
    } else {
      console.log("Role column already exists, skipping");
    }
  },
  down: () => {
    console.log("Warning: Reversing this migration requires manual intervention");
  },
};
