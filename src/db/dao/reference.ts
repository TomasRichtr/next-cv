import {
  ReferenceWithUser,
} from "@/types/reference";

import db from "../db";

export const getReferenceByUserId = (userId: number): ReferenceWithUser | null => {
  const query = `
    SELECT 
      r.id,
      r.reference,
      r.user_id,
      r.date,
      r.display,
      u.email
    FROM [references] r
    JOIN users u ON r.user_id = u.id
    WHERE r.user_id = ?
  `;

  return db.prepare(query).get(userId) as ReferenceWithUser | null;
};

export const getReferenceById = (id: number): ReferenceWithUser | null => {
  const query = `
    SELECT 
      r.id,
      r.reference,
      r.user_id,
      r.date,
      r.display,
      u.email
    FROM [references] r
    JOIN users u ON r.user_id = u.id
    WHERE r.id = ?
  `;

  return db.prepare(query).get(id) as ReferenceWithUser | null;
};

export const getReferencesWithUsers = (): ReferenceWithUser[] => {
  const query = `
    SELECT 
      r.id,
      r.reference,
      r.user_id,
      r.date,
      r.display,
      u.email
    FROM [references] r
    JOIN users u ON r.user_id = u.id
    WHERE r.display = 1
    ORDER BY r.date DESC
  `;

  return db.prepare(query).all() as ReferenceWithUser[];
};

export const createOrUpdateReference = (reference: string, userId: number, display: number = 1): number => {
  const query = `
    INSERT INTO [references] (reference, user_id, date, display)
    VALUES (?, ?, CURRENT_TIMESTAMP, ?)
    ON CONFLICT(user_id) DO UPDATE SET
      reference = excluded.reference,
      date = CURRENT_TIMESTAMP,
      display = excluded.display
  `;

  const result = db.prepare(query).run(reference, userId, display);
  return result.lastInsertRowid as number;
};

export const deleteReferenceByUserId = (userId: number): boolean => {
  const query = `
    DELETE FROM [references] 
    WHERE user_id = ?
  `;

  const result = db.prepare(query).run(userId);
  return result.changes > 0;
};
