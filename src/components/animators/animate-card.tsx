import {
  Properties,
} from "csstype";
import {
  ReactNode,
} from "react";

interface AnimateCardProps {
    children: ReactNode;
    className?: string;
    style?: Properties<string | number>;
}

const AnimateCard = ({
  children,
  style = {},
  className = "",
}: AnimateCardProps) => {
  return (
    <div
      suppressHydrationWarning
      style={style}
      className={
        `${className} intersect:motion-preset-blur-left`
      }
    >
      {children}
    </div>
  );
};

export default AnimateCard;
