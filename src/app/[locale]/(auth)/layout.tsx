import {
  ReactNode,
} from "react";

import {
  Shield,
  protectPage,
} from "@/utils/composables/protectPage";

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
