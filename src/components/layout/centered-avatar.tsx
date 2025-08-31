import {
  StaticImageData,
} from "next/image";

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
  backgroundColor = Colors.PrimaryContent,
  offset = {
    x: 0,
    y: 15,
  },
}: CenteredAvatarProps) => {
  return (
    <div
      className="fixed inset-0 z-20 flex items-center justify-center pointer-events-none"
    >
      <div
        className="border-t-4 border-base-300 bottom-0 w-full"
      />
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
    </div>
  );
};

export default CenteredAvatar;
