import {
  ReactNode,
} from "react";

import {
  AsyncParams,
} from "@/types";

interface ReferenceLayoutProps {
    children: ReactNode;
    modal: ReactNode;
    params: AsyncParams<{ id: string, locale: string[] }>
}

const ReferencesLayout = async ({
  children, modal,
}: ReferenceLayoutProps) => {
  return (
    <>
      {modal}
      {children}
    </>
  );
};

export default ReferencesLayout;
