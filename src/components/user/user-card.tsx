import UserDelete from "@/components/user/user-delete";
import UserDetails from "@/components/user/user-details";
import Avatar from "@/components/utils/avatar";
import Card from "@/components/utils/card";

interface UserCardProps {
  t: (key: string) => string;
  userId: number;
}

const UserCard = async ({
  t, userId,
}: UserCardProps) => {
  return (
    <Card>
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
    </Card>
  );
};

export default UserCard;
