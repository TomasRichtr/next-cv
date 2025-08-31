import MessageForm from "@/components/forms/message-form";
import PageWrapper from "@/components/layout/page-wrapper";
import {
  verifyAuthSession,
} from "@/db/auth";
import {
  getUserById,
} from "@/db/dao/user";
import initTranslations from "@/locales/i18n";
import {
  LocaleParam,
} from "@/types";

const ContactPage = async ({
  params,
}: LocaleParam) => {
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
      className="flex min-w-screen items-center justify-center"
    >
      <MessageForm
        userEmail={userEmail}
        userId={user ? +user.id : undefined}
      />
    </PageWrapper>
  );
};

export default ContactPage;
