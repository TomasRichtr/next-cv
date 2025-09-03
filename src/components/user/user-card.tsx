import UserDetails from "@/components/user/user-details";
import Avatar from "@/components/utils/avatar";
import Card from "@/components/utils/card";

interface UserCardProps {
  t: (key: string) => string;
  userId: number;
  modalId: string
}

const UserCard = async ({
  t, userId, modalId,
}: UserCardProps) => {
  return (
    <Card
      className="items-start! justify-start!"
    >
      <div
        className="flex gap-4 w-full"
      >
        <Avatar />
        <div
          className="flex flex-col items-start justify-start grow w-full gap-4"
        >
          <UserDetails
            userId={userId}
            t={t}
          />
          <div
            className="flex items-end w-full grow  justify-end"
          >
            <button
              type="button"
              className="btn btn-error md:btn-lg"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls={modalId}
              data-overlay={`#${modalId}`}
            >
              {t("login.actions.removeUser")}
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default UserCard;
