import {
  Properties,
} from "csstype";
import {
  ReactNode,
} from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  shadow?: boolean;
  background?: string;
  style?: Properties<string | number>;
}

const Card = ({
  children,
  className = "",
  shadow = true,
  background = "bg-base-200",
  style = {},
}: CardProps) => {
  const shadowClass = shadow ? "shadow-accent" : "";

  return (
    <div
      className={`card w-full ${shadowClass} ${background} ${className}`.trim()}
      style={style}
    >
      <div
        className="card-body card-side flex gap-4 lg:gap-12 justify-between"
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
