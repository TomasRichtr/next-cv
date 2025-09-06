import db from "@/db/db";
import {
  allMigrations,
} from "@/db/migrations/index";
import {
  UserRole,
} from "@/types/user";
import {
  hashUserPassword,
} from "@/utils/hash";

import {
  createOrUpdateReference,
} from "../dao/reference";
import {
  createUser,
} from "../dao/user";
import {
  MigrationRunner,
} from "../migrations";


const sampleReferences: string[] = [
  "Chronically late developer who writes spaghetti code and blames the compiler for everything.",
  "Self-proclaimed 'rockstar' programmer who hasn't updated their skills since 2005 and still uses Internet Explorer.",
  "Overly confident junior developer who thinks Stack Overflow is a legitimate reference and copies code without understanding it.",
  "Perfectionist designer who spends 3 weeks choosing the perfect shade of blue and delivers projects 6 months late.",
  "Pessimistic developer who assumes every feature request is impossible and responds to bugs with 'it works on my machine'.",
  "Antisocial programmer who communicates exclusively through passive-aggressive commit messages and refuses to attend meetings.",
  "Overengineering enthusiast who turns simple forms into microservice architectures with 47 different databases.",
  "Debugging-phobic developer who adds console.log statements everywhere and calls it 'advanced logging techniques'.",
  "Jack-of-all-trades developer who knows 20 programming languages poorly and can't finish a project in any of them.",
  "Burned-out tech lead who mentors junior developers by telling them 'good luck' and walking away.",
];

const dropAllTables = async (): Promise<void> => {
  console.log("Dropping all tables...");

  // Get all table names from PostgreSQL system tables
  const result = await db.query(`
    SELECT tablename as name 
    FROM pg_tables 
    WHERE schemaname = 'public'
  `);
  const tables = result.rows as { name: string }[];

  // Drop tables in order to handle foreign key constraints
  const tableOrder = [
    "sessions",
    "references",
    "messages",
    "users",
    "data",
    "migrations",
  ];

  for (const tableName of tableOrder) {
    const table = tables.find(t => t.name === tableName);
    if (table) {
      console.log(`Dropping table: ${table.name}`);
      await db.query(`DROP TABLE IF EXISTS "${table.name}" CASCADE`);
    }
  }

  // Drop any remaining tables not in the predefined order
  for (const table of tables) {
    if (!tableOrder.includes(table.name)) {
      console.log(`Dropping table: ${table.name}`);
      await db.query(`DROP TABLE IF EXISTS "${table.name}" CASCADE`);
    }
  }

  console.log("All tables dropped successfully.");
};

const seedData = async (): Promise<void> => {
  // Drop all tables first
  await dropAllTables();

  // Run migrations to recreate tables
  const migrationRunner = new MigrationRunner(db);
  await migrationRunner.runMigrations(allMigrations);

  console.log("Starting to seed users...");

  try {
    for (let i = 1; i <= 10; i++) {
      // Create user
      const user = {
        email: `user${i}@example.com`,
        password: hashUserPassword(`password${i}`),
        role: UserRole.User,
      };

      const userId = await createUser(user);
      console.log(`Created user ${i}: ${user.email} (ID: ${userId})`);

      // Create a reference for the user
      const reference = sampleReferences[i - 1];
      const referenceId = await createOrUpdateReference(reference, userId, 1);
      console.log(`Created reference for user ${i} (Reference ID: ${referenceId})`);
    }

    console.log("Successfully seeded 10 users with references!");
  } catch (error) {
    console.error("Error seeding users:", error);
    process.exit(1);
  }
};

seedData();
