import {
  Properties,
} from "csstype";
import {
  ReactNode,
} from "react";

import {
  getListItemAnimationClass,
} from "@/utils/animation";

interface ListItemProps {
    i?: number;
    className?: string;
    children: ReactNode;
    style?: Properties<string | number>;
}

const SlideIn = ({
  i = 0, className = "", children, style = {},
}: ListItemProps) => {
  return (
    <span
      className={`${className} ${getListItemAnimationClass(i)}`}
      style={style}
      suppressHydrationWarning
    >
      {children}
    </span>
  );
};

export default SlideIn;
