import db from "@/backend/db/db";
import {
  NewUser, User, UserRole,
} from "@/types/user";

export const createUser = (user: Omit<NewUser, "confirmPassword">) => {
  const result = db
    .prepare("INSERT INTO users (email, password, role) VALUES (?, ?, ?)")
    .run(user.email, user.password, UserRole.User);

  return result.lastInsertRowid;
};

export const getUserByEmail = (email: string): User | undefined => {
  return db.prepare("SELECT * FROM users WHERE email = ?").get(email) as User | undefined;
};
