import PageWrapper from "@/components/layout/page-wrapper";
import ReferenceCard from "@/components/reference/reference-card";
import UserCard from "@/components/user/user-card";
import {
  verifyAuthSession,
} from "@/db/auth";
import initTranslations from "@/locales/i18n";
import {
  AsyncParams,
} from "@/types";

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
    <PageWrapper
      title={t("profile.title")}
    >
      <div
        className="w-full"
      >
        <UserCard
          t={t}
          userId={+user.id}
        />
        <ReferenceCard
          userId={+user.id}
        />
      </div>
    </PageWrapper>
  );
};

export default ProfilePage;
