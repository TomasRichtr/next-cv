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

const ContactPage = async ({
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
    <PageWrapper
      title={t("contact.title")}
      description={t("contact.description")}
      className="pt-30 mx-0!"
    >
      <div
        className="flex items-center lg:items-start gap-10 w-full flex-col lg:flex-row"
      >
        <AboutMeCard />

        <Card>
          <MessageForm
            userEmail={userEmail}
            userId={user ? +user.id : undefined}
          />
        </Card>
      </div>
    </PageWrapper>
  );
};

export default ContactPage;
