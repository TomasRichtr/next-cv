import UserDelete from "@/components/user/user-delete";
import UserDetails from "@/components/user/user-details";
import Avatar from "@/components/utils/avatar";

interface UserCardProps {
  t: (key: string) => string;
  userId: string;
}

const UserCard = async ({
  t, userId,
}: UserCardProps) => {
  return (
    <div
      className="card w-full shadow-accent bg-base-200"
    >
      <div
        className="card-body card-side flex gap-4 lg:gap-12 justify-between"
      >
        <Avatar />
        <div
          className="flex flex-col justify-end md:justify-start items-end gap-4"
        >
          <UserDetails
            userId={userId}
            t={t}
          />
          <div
            className="card-actions flex-grow justify-end items-end flex md:hidden"
          >
            <UserDelete
              id="user-delete-phone"
              t={t}
              userId={userId}
            />
          </div>
        </div>

        <div
          className="card-actions flex-grow justify-end items-end hidden md:flex"
        >
          <UserDelete
            id="user-delete-desktop"
            t={t}
            userId={userId}
          />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
