import db from "@/db/db";
import {
  Message, NewMessage,
} from "@/types/message";

export const createMessage = (message: NewMessage) => {
  const result = db
    .prepare("INSERT INTO messages (name, user_id, company_name, email, phone, message) VALUES (?, ?, ?, ?, ?, ?)")
    .run(
      message.name, message.user_id || null,
      message.company_name || null,
      message.email, message.phone || null,
      message.message,
    );

  return result.lastInsertRowid as number;
};

export const getMessageById = (id: number): Message | undefined => {
  return db.prepare("SELECT * FROM messages WHERE id = ?").get(id) as Message | undefined;
};

export const getAllMessages = (): Message[] => {
  return db.prepare("SELECT * FROM messages ORDER BY date DESC").all() as Message[];
};

export const deleteMessage = (id: number) => {
  return db.prepare("DELETE FROM messages WHERE id = ?").run(id);
};
