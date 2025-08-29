import {
  UserRole,
} from "@/types/user";

import {
  Migration,
} from "../migrations";

export const addUserRoleMigration: Migration = {
  id: "001",
  name: "add_user_role_column",
  up: (db) => {
    db.exec(`ALTER TABLE users ADD COLUMN role TEXT DEFAULT '${UserRole.User}'`);
    db.exec(`UPDATE users SET role = '${UserRole.User}' WHERE role IS NULL`);

    console.log("Added role column to users table");
  },
  down: () => {
    console.log("Warning: Reversing this migration requires manual intervention");
  },
};
