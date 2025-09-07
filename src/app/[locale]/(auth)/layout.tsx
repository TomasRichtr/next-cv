import {
  ReactNode,
} from "react";

import {
  Shield,
  protectPage,
} from "@/utils/protectPage";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = async ({
  children,
}: AuthLayoutProps) => {
  await protectPage([Shield.AUTH]);

  return (
    <>
      {children}
    </>
  );
};

export default AuthLayout;
