import {
  Properties,
} from "csstype";
import {
  ReactNode,
} from "react";

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
    <div
      className={`card w-full p-4 max-w-xl bg-gradient-to-r from-base-200/35 to-secondary-content/35 backdrop-blur-md shadow-lg ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
