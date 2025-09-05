import db from "../db";

export const authDao = {
  async getSessionAndUser(sessionId: string): Promise<[session: any | null, user: any | null]> {
    const result = await db.query(
      `SELECT s.id, s.expires_at, s.user_id, u.id as user_id, u.email, u.role 
       FROM sessions s 
       JOIN users u ON s.user_id = u.id 
       WHERE s.id = $1`,
      [sessionId],
    );

    if (result.rows.length === 0) {
      return [null, null];
    }

    const row = result.rows[0];
    const session = {
      id: row.id,
      userId: row.user_id,
      expiresAt: new Date(parseInt(row.expires_at)),
      attributes: {},
    };

    const user = {
      id: row.user_id,
      attributes: {
        email: row.email,
        role: row.role,
      },
    };

    return [session, user];
  },

  async getUserSessions(userId: string) {
    const result = await db.query(
      "SELECT id, expires_at, user_id FROM sessions WHERE user_id = $1",
      [userId],
    );

    return result.rows.map(row => ({
      id: row.id,
      userId: row.user_id,
      expiresAt: new Date(parseInt(row.expires_at)),
      attributes: {},
    }));
  },

  async setSession(session: { id: string; userId: string; expiresAt: Date }) {
    await db.query(
      "INSERT INTO sessions (id, user_id, expires_at) VALUES ($1, $2, $3)",
      [
        session.id,
        session.userId,
        session.expiresAt.getTime(),
      ],
    );
  },

  async updateSessionExpiration(sessionId: string, expiresAt: Date) {
    await db.query(
      "UPDATE sessions SET expires_at = $1 WHERE id = $2",
      [
        expiresAt.getTime(),
        sessionId,
      ],
    );
  },

  async deleteSession(sessionId: string) {
    await db.query("DELETE FROM sessions WHERE id = $1", [sessionId]);
  },

  async deleteUserSessions(userId: string) {
    await db.query("DELETE FROM sessions WHERE user_id = $1", [userId]);
  },

  async deleteExpiredSessions() {
    await db.query("DELETE FROM sessions WHERE expires_at <= $1", [Date.now()]);
  },
};
