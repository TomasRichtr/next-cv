import {
  useMemo,
} from "react";

import {
  Sizes,
} from "@/types/theme";

interface LoaderProps {
  text?: string;
  withMargin?: boolean;
  size?: Sizes;
}

const Loader = ({
  text,
  size = Sizes.MD,
}: LoaderProps) => {
  const flyonUISize = useMemo(() => {
    return `loading-${size}`;
  }, [size]);

  return (
    <div
      className="flex flex-col justify-center items-center gap-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-1000"
    >
      <span
        className={`loading loading-bars ${flyonUISize}`.trim()}
      />
      {text && (
        <p
          className="text-xl font-medium m-0 tracking-wide text-secondary-400 animate-pulse"
        >
          {text}
        </p>
      )}
    </div>
  );
};

export default Loader;
