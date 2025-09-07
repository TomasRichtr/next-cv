import {
  isNil,
} from "lodash";
import {
  Lucia,
  TimeSpan,
} from "lucia";
import {
  cookies,
} from "next/headers";

import {
  authDao,
} from "./dao/auth";

const lucia = new Lucia(
  authDao,
  {
    sessionCookie: {
      expires: false,
      attributes: {
        secure: process.env.NODE_ENV === "production",
      },
    },
    sessionExpiresIn: new TimeSpan(30, "d"), // 30 days
    getUserAttributes: (attributes) => {
      return {
        email: attributes.email,
        role: attributes.role,
      };
    },
  },
);

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: {
      email: string;
      role: string;
    };
  }
}

// ... rest of your auth functions remain the same ...
type SessionCookie = ReturnType<typeof lucia.createSessionCookie> | ReturnType<typeof lucia.createBlankSessionCookie>;

const setSessionCookie = async (
  sessionCookie: SessionCookie,
) => {
  (await cookies()).set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
};

const getCurrentSessionId = async (): Promise<string | null> => {
  const sessionCookie = (await cookies()).get(lucia.sessionCookieName);
  return sessionCookie?.value ?? null;
};

export const createAuthSession = async (userId: number) => {
  const session = await lucia.createSession(String(userId), {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  await setSessionCookie(sessionCookie);
};

export const verifyAuthSession = async (canSetCookies: boolean = false) => {
  const sessionId = await getCurrentSessionId();

  if (isNil(sessionId)) {
    return {
      user: null,
      session: null,
    };
  }

  const result = await lucia.validateSession(sessionId);

  if (canSetCookies) {
    if (result.session?.fresh) {
      const sessionCookie = lucia.createSessionCookie(result.session.id);
      await setSessionCookie(sessionCookie);
    }

    if (isNil(result.session)) {
      const sessionCookie = lucia.createBlankSessionCookie();
      await setSessionCookie(sessionCookie);
    }
  }

  return result;
};

export const destroyAuthSession = async () => {
  const {
    session,
  } = await verifyAuthSession(true);

  if (isNil(session)) {
    return {
      error: "Unauthenticated",
    };
  }

  await lucia.invalidateSession(session.id);
  const sessionCookie = lucia.createBlankSessionCookie();
  await setSessionCookie(sessionCookie);
};
