import sql from "better-sqlite3";

import {
  MigrationRunner,
} from "@/db/migrations";
import {
  allMigrations,
} from "@/db/migrations/index";

const db = sql("data.db");

console.log("Running database migrations...");
const migrationRunner = new MigrationRunner(db);
migrationRunner.runMigrations(allMigrations);
console.log("Migrations completed successfully!");

db.close();
