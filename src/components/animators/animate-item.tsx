import {
  ReactNode,
} from "react";

import {
  getListItemAnimationClass,
} from "@/utils/animation";

interface ListItemProps {
    i: number;
    className?: string;
    children: ReactNode
}

const AnimateItem = ({
  i, className = "", children,
}: ListItemProps) => {
  return (
    <div
      className={`${className} ${getListItemAnimationClass(i)}`}
      suppressHydrationWarning
    >
      {children}
    </div>
  );
};

export default AnimateItem;
