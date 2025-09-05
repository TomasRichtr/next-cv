import {
  ReactNode,
} from "react";

interface AnimateTextProps {
    children: ReactNode;
}

const AnimateText = ({
  children,
}: AnimateTextProps) => {
  return (
    <span
      className="intersect:motion-preset-blur-right"
      suppressHydrationWarning
    >
      {children}
    </span>
  );
};

export default AnimateText;
