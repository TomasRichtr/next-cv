import {
  Pool, 
} from "pg";

import {
  MigrationRunner,
} from "@/db/migrations";
import {
  allMigrations,
} from "@/db/migrations/index";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === "production" ? {
    rejectUnauthorized: false, 
  } : false,
});

async function runMigrations() {
  try {
    console.log("Running database migrations...");
    const migrationRunner = new MigrationRunner(pool);
    await migrationRunner.runMigrations(allMigrations);
    console.log("Migrations completed successfully!");
  } catch (error) {
    console.error("Migration failed:", error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

runMigrations();
