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
      className={`card w-full p-4 max-w-xl bg-base-200 rounded-xl hover:bg-base-300 transition-all duration-200 hover:shadow-lg ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
