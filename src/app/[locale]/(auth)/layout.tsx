import {
  ReactNode,
} from "react";

import {
  Shield,
  usePageProtection,
} from "@/utils/composables/usePageProtection";

const AuthLayout = async ({
  children,
}: {
    children: ReactNode;
}) => {
  await usePageProtection([Shield.AUTH]);

  return (
    <>
      {children}
    </>
  );
};

export default AuthLayout;
