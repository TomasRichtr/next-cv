import {
  notFound,
} from "next/navigation";

import ReferenceItem from "@/components/reference/reference-item";
import Modal from "@/components/utils/modal";
import ModalRouter from "@/components/utils/modal-router";
import {
  ROUTE,
} from "@/constants/route";
import {
  verifyAuthSession,
} from "@/db/auth";
import {
  getReferenceById,
} from "@/db/dao/reference";
import initTranslations from "@/locales/i18n";
import {
  AsyncParams,
} from "@/types";
import {
  Sizes,
} from "@/types/theme";


interface ReferenceModalProps {
  locale: string;
  id?: string;
}

const ReferencesModal = async ({
  params,
}: AsyncParams<ReferenceModalProps>) => {
  const {
    id, locale,
  } = await params;

  if (!id) return;

  const {
    t,
  } = await initTranslations(locale);

  const {
    user,
  } = await verifyAuthSession();

  const reference = await getReferenceById(+id);

  if (!reference) {
    notFound();
  }

  const modalId = `reference-${id}`;

  return (
    <>
      <ModalRouter
        modalId={modalId}
        rootRoute={ROUTE.REFERENCES}
      />

      <Modal
        size={Sizes.XL}
        id={modalId}
        t={t}
        footer={(
          <button
            type="button"
            className="btn btn-soft btn-secondary close-overlay"
            data-overlay={`#${modalId}`}
          >
            {t("modal.close")}
          </button>
        )}
      >
        <ReferenceItem
          userId={user?.id ? +user.id : undefined}
          reference={reference}
          isLink={false}
          className="mt-1"
        />
      </Modal>
    </>

  );
};

export default ReferencesModal;
