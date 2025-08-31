import Image from "next/image";

import codeBackground from "@/assets/code-background.webp";

const HeroBackground = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-[50vh] z-0"
    >
      <Image
        src={codeBackground}
        alt="Code background"
        fill
        className="object-cover blur-xs"
        priority
      />
      <div
        className="absolute inset-0 bg-black/30"
      />
    </div>
  );
};

export default HeroBackground;
