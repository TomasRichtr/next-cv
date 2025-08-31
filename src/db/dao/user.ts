import db from "@/db/db";
import {
  NewUser, User, UserRole,
} from "@/types/user";

export const createUser = (user: Omit<NewUser, "confirmPassword">) => {
  const result = db
    .prepare("INSERT INTO users (email, password, role) VALUES (?, ?, ?)")
    .run(user.email, user.password, UserRole.User);

  return result.lastInsertRowid as number;
};

export const getUserByEmail = (email: string): User | undefined => {
  return db.prepare("SELECT * FROM users WHERE email = ?").get(email) as User | undefined;
};

export const getUserById = (id: number): User | undefined => {
  return db.prepare("SELECT * FROM users WHERE id = ?").get(id) as User | undefined;
};

export const deleteUser = (id: number) => {
  return db.prepare("DELETE FROM users WHERE id = ?").run(id);
};
