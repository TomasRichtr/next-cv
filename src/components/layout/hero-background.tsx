import Image from "next/image";
import {
  ReactNode,
} from "react";

import codeBackground from "@/assets/code-background.webp";

interface HeroBackgroundProps {
  className?: string;
  children?: ReactNode
}

const HeroBackground = ({
  className = "", children,
}: HeroBackgroundProps) => {
  return (
    <div
      className={`absolute top-0 w-full ${className}`}
    >
      <Image
        src={codeBackground}
        alt="Code background"
        fill
        className="object-cover blur-xs"
        priority
      />
      {children}
    </div>
  );
};

export default HeroBackground;
