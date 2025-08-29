import Modal from "@/components/layout/modal";
import UserDeleteButton from "@/components/user/user-delete-button";

interface UserDeleteProps {
    id: string,
    userId: string,
    t: (key: string) => string,
}

const UserDelete = async ({
  id, t, userId,
}: UserDeleteProps) => {
  return (
    <>
      <Modal
        id={id}
        t={t}
        title={t("login.actions.removeUser")}
        footer={(
          <div
            className="flex gap-2"
          >
            <button
              type="button"
              className="btn btn-soft btn-secondary"
              data-overlay={`#${id}`}
            >
              {t("modal.close")}
            </button>
            <UserDeleteButton
              userId={userId}
              id={id}
            />
          </div>
        )}
      >
        <p
          className="text-base-content/80"
        >
          {t("modal.confirmDelete")}
        </p>
      </Modal>

      <button
        type="button"
        className="btn btn-error md:btn-lg"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls={id}
        data-overlay={`#${id}`}
      >
        {t("login.actions.removeUser")}
      </button>
    </>
  );
};

export default UserDelete;
