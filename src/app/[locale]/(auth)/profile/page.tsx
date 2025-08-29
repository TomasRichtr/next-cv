import {
  verifyAuthSession,
} from "@/backend/db/auth";
import PageWrapper from "@/components/layout/page-wrapper";
import UserCard from "@/components/user/user-card";
import {
  LocaleParam,
} from "@/types";
import initTranslations from "@/utils/locales/i18n";

const UserProfilePage = async ({
  params,
}: LocaleParam) => {
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
    <PageWrapper
      title={t("profile.title")}
    >
      <div
        className="w-full"
      >
        <UserCard
          t={t}
          userId={user.id}
        />
      </div>
    </PageWrapper>
  );
};

export default UserProfilePage;
