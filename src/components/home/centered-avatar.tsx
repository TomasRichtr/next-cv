import myPhoto from "@/assets/my-photo.png";
import SlideIn from "@/components/animators/slide-in";
import Avatar from "@/components/utils/avatar";
import {
  Colors,
  Sizes,
} from "@/types/theme";

const CenteredAvatar = () => {
  return (
    <SlideIn
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
    </SlideIn>
  );
};

export default CenteredAvatar;
