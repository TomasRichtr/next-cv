import {
  ReferenceWithUser,
} from "@/types/reference";

import db from "../db";

export const getReferenceByUserId = async (userId: number): Promise<ReferenceWithUser | null> => {
  const query = `
    SELECT 
      r.id,
      r.reference,
      r.user_id,
      r.date,
      r.display,
      u.email
    FROM "references" r
    JOIN users u ON r.user_id = u.id
    WHERE r.user_id = $1
  `;

  const result = await db.query(query, [userId]);
  return result.rows[0] || null;
};

export const getReferenceById = async (id: number): Promise<ReferenceWithUser | null> => {
  const query = `
    SELECT 
      r.id,
      r.reference,
      r.user_id,
      r.date,
      r.display,
      u.email
    FROM "references" r
    JOIN users u ON r.user_id = u.id
    WHERE r.id = $1
  `;

  const result = await db.query(query, [id]);
  return result.rows[0] || null;
};

export const getReferencesWithUsers = async (): Promise<ReferenceWithUser[]> => {
  const query = `
    SELECT 
      r.id,
      r.reference,
      r.user_id,
      r.date,
      r.display,
      u.email
    FROM "references" r
    JOIN users u ON r.user_id = u.id
    WHERE r.display = 1
    ORDER BY r.date DESC
  `;

  const result = await db.query(query);
  return result.rows;
};

export const createOrUpdateReference = async (
  reference: string, userId: number, display: number = 1,
): Promise<number> => {
  const query = `
    INSERT INTO "references" (reference, user_id, date, display)
    VALUES ($1, $2, CURRENT_TIMESTAMP, $3)
    ON CONFLICT(user_id) DO UPDATE SET
      reference = excluded.reference,
      date = CURRENT_TIMESTAMP,
      display = excluded.display
    RETURNING id
  `;

  const result = await db.query(query, [
    reference,
    userId,
    display,
  ]);
  return result.rows[0].id;
};

export const deleteReferenceByUserId = async (userId: number): Promise<boolean> => {
  const query = `
    DELETE FROM "references" 
    WHERE user_id = $1
  `;

  const result = await db.query(query, [userId]);
  return !!(result.rowCount && result.rowCount > 0);
};
