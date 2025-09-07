import {
  ReactNode,
} from "react";

interface ReferenceLayoutProps {
  children: ReactNode;
  modal: ReactNode;
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
