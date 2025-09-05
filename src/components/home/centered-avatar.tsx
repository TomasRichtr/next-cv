import {
  StaticImageData,
} from "next/image";

import AnimateCard from "@/components/animators/animate-card";
import Avatar from "@/components/utils/avatar";
import {
  Colors,
  Sizes,
} from "@/types/theme";

interface CenteredAvatarProps {
  image: StaticImageData;
  size?: Sizes;
  backgroundColor?: Colors;
  offset?: { x: number; y: number };
}

const CenteredAvatar = ({
  image,
  size = Sizes.XL,
  backgroundColor = Colors.Secondary,
  offset = {
    x: 0,
    y: 15,
  },
}: CenteredAvatarProps) => {
  return (
    <AnimateCard
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <div
        className="absolute"
      >
        <Avatar
          image={image}
          size={size}
          backgroundColor={backgroundColor}
          offset={offset}
        />
      </div>
    </AnimateCard>
  );
};

export default CenteredAvatar;
