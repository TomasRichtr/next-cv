import myPhoto from "@/assets/my-photo.png";
import AnimateCard from "@/components/animators/animate-card";
import Avatar from "@/components/utils/avatar";
import {
  Colors,
  Sizes,
} from "@/types/theme";

const CenteredAvatar = () => {
  return (
    <AnimateCard
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <div
        className="absolute"
      >
        <Avatar
          image={myPhoto}
          size={Sizes.XL}
          backgroundColor={Colors.Secondary}
          offset={{
            x: 0,
            y: 15,
          }}
          priority
        />
      </div>
    </AnimateCard>
  );
};

export default CenteredAvatar;
