import AuthForm from "@/components/auth/auth-form";
import PageWrapper from "@/components/layout/page-wrapper";
import initTranslations from "@/locales/i18n";
import {
  LocaleParam,
} from "@/types";
import {
  LoginMode,
} from "@/types/user";

const LoginPage = async ({
  params,
}: LocaleParam) => {
  const {
    locale,
  } = await params;

  const {
    t,
  } = await initTranslations(locale);

  return (
    <PageWrapper
      title={t("login.title")}
      description={t("login.description")}
    >
      <AuthForm
        mode={LoginMode.Login}
      />
    </PageWrapper>
  );
};

export default LoginPage;
