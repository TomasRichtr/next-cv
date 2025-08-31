import Image, {
  StaticImageData,
} from "next/image";

import {
  Colors,
  Sizes,
} from "@/types/theme";

const Avatar = ({
  image,
  size = Sizes.LG,
  backgroundColor = Colors.Neutral,
  offset = {
    x: 0,
    y: 0,
  },
}: {
  image?: string | StaticImageData;
  size?: Sizes;
  backgroundColor?: Colors;
  offset?: { x: number; y: number };
}) => {
  const getSizeClasses = () => {
    switch (size) {
    case Sizes.XS:
      return "size-8 border-2";
    case Sizes.SM:
      return "size-12 border-4";
    case Sizes.MD:
      return "size-16 border-4";
    case Sizes.LG:
      return "size-22 md:size-44 border-6";
    case Sizes.XL:
      return "size-32 md:size-56 border-6";
    default:
      return "size-22 md:size-44 border-14";
    }
  };

  const getIconSizeClasses = () => {
    switch (size) {
    case Sizes.XS:
      return "size-4";
    case Sizes.SM:
      return "size-6";
    case Sizes.MD:
      return "size-8";
    case Sizes.LG:
      return "size-16 md:size-38";
    case Sizes.XL:
      return "size-24 md:size-48";
    default:
      return "size-16 md:size-38";
    }
  };

  const getBackgroundClasses = () => {
    switch (backgroundColor) {
    case Colors.Primary:
      return "bg-primary text-primary-content";
    case Colors.Secondary:
      return "bg-secondary text-secondary-content";
    case Colors.Accent:
      return "bg-accent text-accent-content";
    case Colors.Info:
      return "bg-info text-info-content";
    case Colors.Success:
      return "bg-success text-success-content";
    case Colors.Warning:
      return "bg-warning text-warning-content";
    case Colors.Error:
      return "bg-error text-error-content";
    case Colors.Neutral:
      return "bg-neutral text-neutral-content";
    case Colors.PrimaryContent:
      return "bg-primary-content text-primary";
    default:
      return "bg-neutral text-neutral-content";
    }
  };
  return (
    <div
      className="avatar avatar-placeholder"
    >
      <div
        className={`${getBackgroundClasses()} ${getSizeClasses()} rounded-full border-base-300`}
      >
        {image && (
          <Image
            src={image}
            alt="avatar photo"
            className="object-cover"
            style={{
              objectPosition: `${offset.x}px ${offset.y}px`,
            }}
          />
        )}
        {!image && (
          <span
            className={`icon-[tabler--user] ${getIconSizeClasses()}`}
            style={{
              transform: `translate(${offset.x}px, ${offset.y}px)`,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Avatar;
