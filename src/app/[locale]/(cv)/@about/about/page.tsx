import AboutMeCard from "@/components/about/about-me-card";
import MessageForm from "@/components/forms/message-form";
import PageWrapper from "@/components/layout/page-wrapper";
import Card from "@/components/utils/card";
import {
  verifyAuthSession,
} from "@/db/auth";
import {
  getUserById,
} from "@/db/dao/user";
import initTranslations from "@/locales/i18n";
import {
  AsyncParams,
} from "@/types";

const AboutPage = async ({
  params,
}: AsyncParams) => {
  const {
    locale,
  } = await params;

  const {
    t,
  } = await initTranslations(locale);

  const {
    user,
  } = await verifyAuthSession();

  let userEmail;
  if (user) {
    const dbUser = getUserById(+user.id);
    userEmail = dbUser?.email;
  }

  return (
    <Card
      className="bg-white border border-base-300 max-w-6xl mx-auto"
    >
      <PageWrapper
        title={t("pageSections.contacts")}
      >
        <div
          className="flex"
        >
          <AboutMeCard />
          <Card
            className="bg-secondary"
          >
            <MessageForm
              userEmail={userEmail}
              userId={user ? +user.id : undefined}
            />
          </Card>
        </div>
      </PageWrapper>
    </Card>
  );
};

export default AboutPage;
