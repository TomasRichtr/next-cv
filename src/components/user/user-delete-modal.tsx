import UserDeleteButton from "@/components/user/user-delete-button";
import Modal from "@/components/utils/modal";

interface UserDeleteModalProps {
    modalId: string,
    userId: number,
    t: (key: string) => string,
}

const UserDeleteModal = ({
  modalId, userId, t,
}: UserDeleteModalProps) => {
  return (
    <Modal
      id={modalId}
      t={t}
      title={t("login.actions.removeUser")}
      footer={(
        <div
          className="flex gap-2"
        >
          <button
            type="button"
            className="btn btn-soft btn-secondary"
            data-overlay={`#${modalId}`}
          >
            {t("modal.close")}
          </button>
          <UserDeleteButton
            userId={userId}
            modalId={modalId}
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
  );
};

export default UserDeleteModal;
