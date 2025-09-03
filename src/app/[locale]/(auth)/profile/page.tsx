import PageWrapper from "@/components/layout/page-wrapper";
import ReferenceCard from "@/components/reference/reference-card";
import UserCard from "@/components/user/user-card";
import UserDeleteModal from "@/components/user/user-delete-modal";
import {
  verifyAuthSession,
} from "@/db/auth";
import initTranslations from "@/locales/i18n";
import {
  AsyncParams,
} from "@/types";

const MODAL_ID = "delete-user";

const ProfilePage = async ({
  params,
}: AsyncParams) => {
  const {
    user,
  } = await verifyAuthSession();

  if (!user) return;

  const {
    locale,
  } = await params;

  const {
    t,
  } = await initTranslations(locale);

  return (
    <>
      <UserDeleteModal
        modalId={MODAL_ID}
        userId={+user.id!}
        t={t}
      />
      <PageWrapper
        title={t("profile.title")}
        className="pt-30"
      >
        <UserCard
          t={t}
          userId={+user.id}
          modalId={MODAL_ID}
        />
        <ReferenceCard
          userId={+user.id}
        />
      </PageWrapper>
    </>
  );
};

export default ProfilePage;
