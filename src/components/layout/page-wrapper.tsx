import {
  ReactNode,
} from "react";

import AnimateText from "@/components/animators/animate-text";

interface PageWrapperProps {
  children: ReactNode;
  title?: string;
  description?: string;
  className?: string;
}
const PageWrapper = ({
  children,
  title,
  description,
  className = "",
}: PageWrapperProps) => {
  const animatedTitle = (
    <AnimateText>
      {title}
    </AnimateText>
  );

  return (
    <>
      <div
        className={`min-h-screen w-screen mx-auto items-center justify-start flex flex-col ${className}`}
      >
        <div
          className="px-4 md:px-6 pb-4 md:pb-6 h-full w-full flex flex-col items-center max-w-6xl mx-auto"
        >
          {(title || description) && (
            <div
              className="w-full mb-10 text-center"
            >
              {title && (
              <>
                <h2
                  className="hidden lg:inline-block text-primary"
                >
                  {animatedTitle}
                </h2>
                <h3
                  className="inline-block lg:hidden text-primary"
                >
                  {animatedTitle}
                </h3>
              </>
              )}
              {description && (
              <p
                className="text-secondary mt-2"
              >
                <AnimateText>
                  {description}
                </AnimateText>
              </p>
              )}
            </div>
          )}
          {children}
        </div>
      </div>
    </>
  );
};

export default PageWrapper;
