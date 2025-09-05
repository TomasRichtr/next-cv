import Image, {
  StaticImageData,
} from "next/image";

import {
  Colors,
  Sizes,
} from "@/types/theme";

const sizeClasses: Partial<Record<Sizes, string>> = {
  [Sizes.XS]: "size-8 border-2",
  [Sizes.SM]: "size-12 border-4",
  [Sizes.MD]: "size-16 border-4",
  [Sizes.LG]: "size-22 md:size-44 border-6",
  [Sizes.XL]: "size-32 md:size-56 border-6",
};

const iconSizeClasses: Partial<Record<Sizes, string>> = {
  [Sizes.XS]: "size-4",
  [Sizes.SM]: "size-6",
  [Sizes.MD]: "size-8",
  [Sizes.LG]: "size-16 md:size-38",
  [Sizes.XL]: "size-24 md:size-48",
};

const backgroundClasses: Partial<Record<Colors, string>> = {
  [Colors.Primary]: "bg-primary text-primary-content",
  [Colors.Secondary]: "bg-secondary text-secondary-content",
  [Colors.Accent]: "bg-accent text-accent-content",
  [Colors.Info]: "bg-info text-info-content",
  [Colors.Success]: "bg-success text-success-content",
  [Colors.Warning]: "bg-warning text-warning-content",
  [Colors.Error]: "bg-error text-error-content",
  [Colors.Neutral]: "bg-neutral text-neutral-content",
  [Colors.PrimaryContent]: "bg-primary-content text-primary",
};

const Avatar = ({
  image,
  size = Sizes.LG,
  backgroundColor = Colors.Neutral,
  offset = {
    x: 0,
    y: 0,
  },
  priority = false,
}: {
  image?: string | StaticImageData;
  size?: Sizes;
  backgroundColor?: Colors;
  offset?: { x: number; y: number };
  priority?: boolean;
}) => {
  const sizeClass = sizeClasses[size] ?? "size-22 md:size-44 border-14";
  const iconSizeClass = iconSizeClasses[size] ?? "size-16 md:size-38";
  const backgroundClass = backgroundClasses[backgroundColor] ?? "bg-neutral text-neutral-content";

  return (
    <div
      className="avatar avatar-placeholder"
    >
      <div
        className={`${backgroundClass} ${sizeClass} rounded-full border-base-content relative overflow-hidden`}
      >
        {image && (
          <Image
            src={image}
            alt="avatar photo"
            className="object-cover"
            style={{
              objectPosition: `${offset.x}px ${offset.y}px`,
            }}
            priority={priority}
            fill
          />
        )}
        {!image && (
          <span
            className={`icon-[tabler--user] ${iconSizeClass}`}
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
