import UserDelete from "@/components/utils/user-delete";
import {
  User,
} from "@/types/user";

interface UserInfoCardProps {
  user: User;
  t: (key: string) => string;
}

const UserInfoCard = ({
  user, t,
}: UserInfoCardProps) => {
  return (
    <div
      className="card sm:max-w-sm"
    >
      <div
        className="card-body"
      >
        <h5
          className="card-title mb-2.5"
        >
          {t("profile.title")}
        </h5>
        <div
          className="mb-4 space-y-2"
        >
          <p>
            <strong>
              {t("profile.labels.id")}
              :
            </strong>
            {" "}
            {user.id}
          </p>
          <p>
            <strong>
              {t("profile.labels.email")}
              :
            </strong>
            {" "}
            {user.email}
          </p>
          <p>
            <strong>
              {t("profile.labels.role")}
              :
            </strong>
            {" "}
            {user.role}
          </p>
        </div>
        <div
          className="card-actions"
        >
          <UserDelete
            userId={user.id}
          />
        </div>
      </div>
    </div>
  );
};

export default UserInfoCard;
