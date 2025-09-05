import {
  Properties,
} from "csstype";
import {
  ReactNode,
} from "react";

import AnimateCard from "@/components/animators/animate-card";

interface CardProps {
  children: ReactNode;
  className?: string;
  background?: string;
  style?: Properties<string | number>;
}

const Card = ({
  children,
  className = "",
  style = {},
}: CardProps) => {

  return (
    <AnimateCard
      className={`
        card w-full p-4 max-w-xl bg-base-200 rounded-xl hover:bg-base-300 
        transition-all duration-200 hover:shadow-lg ${className}`
      }
      style={style}
    >
      {children}
    </AnimateCard>
  );
};

export default Card;
