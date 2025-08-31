import sql from "better-sqlite3";

import {
  MigrationRunner,
} from "@/db/migrations";
import {
  allMigrations,
} from "@/db/migrations/index";

const db = sql("data.db");

const migrationRunner = new MigrationRunner(db);
migrationRunner.runMigrations(allMigrations);

export default db;
