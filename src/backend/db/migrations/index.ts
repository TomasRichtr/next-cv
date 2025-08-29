import {
  Migration,
} from "../migrations";

import {
  addUserRoleMigration,
} from "./001_add_user_role";

export const allMigrations: Migration[] = [
  addUserRoleMigration,
];
