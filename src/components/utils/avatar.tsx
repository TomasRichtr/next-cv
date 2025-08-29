import Image from "next/image";

const Avatar = ({
  imageUrl,
}: {imageUrl?: string}) => {
  return (
    <div
      className="avatar avatar-placeholder"
    >
      <div
        className="bg-neutral text-neutral-content size-22 md:size-44 rounded-full"
      >
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="avatar photo"
          />
        )}
        {!imageUrl && (
          <span
            className="icon-[tabler--user] size-16 md:size-38"
          />
        )}
      </div>
    </div>
  );
};

export default Avatar;
