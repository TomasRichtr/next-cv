import {
  redirect,
} from "next/navigation";

import {
  verifyAuthSession,
} from "@/backend/db/auth";
import {
  ROUTE,
} from "@/constants/route";

export enum Shield {
    AUTH = "auth",
    SIGN_UP = "signUp"
}

export const protectPage = async (shields: Shield[]) => {
  if (shields.includes(Shield.AUTH)) {
    const {
      user,
    } = await verifyAuthSession();
    if (!user) {
      return redirect(ROUTE.HOME);
    }
  }

  if (shields.includes(Shield.SIGN_UP)) {
    const allowRegistration = process.env.ALLOW_USERS_REGISTRATION === "true";
    if (!allowRegistration) {
      return redirect(ROUTE.HOME);
    }
  }
};
