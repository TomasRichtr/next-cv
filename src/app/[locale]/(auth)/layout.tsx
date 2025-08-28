import {
  ReactNode,
} from "react";

import {
  Shield,
  protectPage,
} from "@/utils/protectPage";

const AuthLayout = async ({
  children,
}: {
    children: ReactNode;
}) => {
  await protectPage([Shield.AUTH]);

  return (
    <>
      {children}
    </>
  );
};

export default AuthLayout;
