import db from "@/db/db";
import {
  Message, NewMessage,
} from "@/types/message";

export const createMessage = async (message: NewMessage): Promise<number> => {
  const result = await db.query(
    "INSERT INTO messages (name, user_id, company_name, email, phone, message) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id",
    [
      message.name,
      message.user_id || null,
      message.company_name || null,
      message.email,
      message.phone || null,
      message.message,
    ],
  );

  return result.rows[0].id;
};

export const getMessageById = async (id: number): Promise<Message | undefined> => {
  const result = await db.query("SELECT * FROM messages WHERE id = $1", [id]);
  return result.rows[0];
};

export const getAllMessages = async (): Promise<Message[]> => {
  const result = await db.query("SELECT * FROM messages ORDER BY date DESC");
  return result.rows;
};

export const deleteMessage = async (id: number) => {
  return await db.query("DELETE FROM messages WHERE id = $1", [id]);
};
