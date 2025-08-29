import sql from "better-sqlite3";

export interface Migration {
  id: string;
  name: string;
  up: (db: sql.Database) => void;
  down?: (db: sql.Database) => void;
}

export class MigrationRunner {
  private db: sql.Database;

  constructor(db: sql.Database) {
    this.db = db;
    this.initializeMigrationsTable();
  }

  private initializeMigrationsTable(): void {
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS migrations (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        executed_at INTEGER NOT NULL
      );
    `);
  }

  private hasBeenExecuted(migrationId: string): boolean {
    const result = this.db.prepare("SELECT id FROM migrations WHERE id = ?").get(migrationId);
    return !!result;
  }

  private markAsExecuted(migration: Migration): void {
    this.db.prepare("INSERT INTO migrations (id, name, executed_at) VALUES (?, ?, ?)")
      .run(migration.id, migration.name, Date.now());
  }

  public runMigrations(migrations: Migration[]): void {
    console.log("Running database migrations...");
    
    for (const migration of migrations) {
      if (!this.hasBeenExecuted(migration.id)) {
        console.log(`Executing migration: ${migration.name}`);
        
        try {
          migration.up(this.db);
          this.markAsExecuted(migration);
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

  public getExecutedMigrations(): Array<{ id: string; name: string; executed_at: number }> {
    return this.db.prepare("SELECT * FROM migrations ORDER BY executed_at ASC").all() as Array<{
      id: string;
      name: string;
      executed_at: number;
    }>;
  }
}
