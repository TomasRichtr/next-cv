import db from "@/db/db";
import {
  NewUser, User, UserRole,
} from "@/types/user";

export const createUser = async (user: Omit<NewUser, "confirmPassword">): Promise<number> => {
  const result = await db.query(
    "INSERT INTO users (email, password, role) VALUES ($1, $2, $3) RETURNING id",
    [
      user.email,
      user.password,
      UserRole.User,
    ],
  );

  return result.rows[0].id;
};

export const getUserByEmail = async (email: string): Promise<User | undefined> => {
  const result = await db.query("SELECT * FROM users WHERE email = $1", [email]);
  return result.rows[0];
};

export const getUserById = async (id: number): Promise<User | undefined> => {
  const result = await db.query("SELECT * FROM users WHERE id = $1", [id]);
  return result.rows[0];
};

export const deleteUser = async (id: number) => {
  return await db.query("DELETE FROM users WHERE id = $1", [id]);
};
