import {
  Pool, 
} from "pg";

export interface Migration {
  id: string;
  name: string;
  up: (db: Pool) => Promise<void>;
  down?: (db: Pool) => Promise<void>;
}

export class MigrationRunner {
  private db: Pool;

  constructor(db: Pool) {
    this.db = db;
  }

  private async initializeMigrationsTable(): Promise<void> {
    await this.db.query(`
      CREATE TABLE IF NOT EXISTS migrations (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        executed_at BIGINT NOT NULL
      );
    `);
  }

  private async hasBeenExecuted(migrationId: string): Promise<boolean> {
    const result = await this.db.query("SELECT id FROM migrations WHERE id = $1", [migrationId]);
    return result.rows.length > 0;
  }

  private async markAsExecuted(migration: Migration): Promise<void> {
    await this.db.query(
      "INSERT INTO migrations (id, name, executed_at) VALUES ($1, $2, $3)",
      [
        migration.id,
        migration.name,
        Date.now(),
      ],
    );
  }

  public async runMigrations(migrations: Migration[]): Promise<void> {
    console.log("Running database migrations...");

    await this.initializeMigrationsTable();

    for (const migration of migrations) {
      if (!(await this.hasBeenExecuted(migration.id))) {
        console.log(`Executing migration: ${migration.name}`);

        try {
          await migration.up(this.db);
          await this.markAsExecuted(migration);
          console.log(`✓ Migration ${migration.name} completed successfully`);
        } catch (error) {
          console.error(`✗ Migration ${migration.name} failed:`, error);
          throw error;
        }
      } else {
        console.log(`⊘ Migration ${migration.name} already executed, skipping`);
      }
    }

    console.log("All migrations completed.");
  }

  public async getExecutedMigrations(): Promise<Array<{ id: string; name: string; executed_at: number }>> {
    const result = await this.db.query("SELECT * FROM migrations ORDER BY executed_at ASC");
    return result.rows;
  }
}
