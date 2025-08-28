

import {
  verifyAuthSession,
} from "@/backend/db/auth";
import {
  getUserById,
} from "@/backend/db/user";
import UserInfoCard from "@/components/utils/user-info-card";
import {
  NAMESPACE,
} from "@/constants/locales";
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

  const dbUser = getUserById(user!.id)!;

  const {
    locale,
  } = await params;

  const {
    t,
  } = await initTranslations(locale, [NAMESPACE.COMMON]);

  return (
    <div
      className="flex justify-center p-6"
    >
      <UserInfoCard
        user={dbUser}
        t={t}
      />
    </div>
  );
};

export default UserProfilePage;
