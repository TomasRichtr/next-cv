import {
  ReactNode, Suspense,
} from "react";

import Loader from "@/components/utils/loader";

interface LoadingSectionProps {
    children: ReactNode;
    loadingText?: string;
}

export const LoadingSection = ({
  children,
  loadingText,
}: LoadingSectionProps) => {
  return (
    <section
      className="min-h-96"
    >
      <Suspense
        fallback={(
          <Loader
            text={loadingText}
          />
        )}
      >
        {children}
      </Suspense>
    </section>
  );
};
