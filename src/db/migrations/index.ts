import {
  Migration,
} from "../migrations";

import {
  createInitialTablesMigration,
} from "./000_create_initial_tables";
import {
  addUserRoleMigration,
} from "./001_add_user_role";
import {
  dropAppStateMigration,
} from "./002_drop_app_state";
import {
  createReferencesTableMigration,
} from "./003_create_references_table";
import {
  createMessagesTableMigration,
} from "./004_create_messages_table";

export const allMigrations: Migration[] = [
  createInitialTablesMigration,
  addUserRoleMigration,
  dropAppStateMigration,
  createReferencesTableMigration,
  createMessagesTableMigration,
];
