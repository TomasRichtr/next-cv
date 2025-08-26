import {
  redirect,
} from "next/navigation";
import {
  ReactNode,
} from "react";

import {
  verifyAuthSession,
} from "@/backend/db/auth";
import {
  ROUTE,
} from "@/constants/route";

const AuthLayout = async ({
  children,
}: {
    children: ReactNode;
}) => {
  const {
    user,
  } = await verifyAuthSession();

  if (!user) {
    return redirect(ROUTE.HOME);
  }

  return (
    <>
      {children}
    </>
  );
};

export default AuthLayout;
