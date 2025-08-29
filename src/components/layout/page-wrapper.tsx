import {
  ReactNode,
} from "react";

const PageWrapper = ({
  children,
  title,
}: {children: ReactNode, title?: string}) => {
  return (
    <>
      {title && (
      <div
        className="text-left w-full"
      >
        <h2
          className="hidden lg:inline-block"
        >
          {title}
        </h2>
        <h3
          className="inline-block lg:hidden"
        >
          {title}
        </h3>
      </div>
      )}
      {children}
    </>
  );
};

export default PageWrapper;
