import AuthForm from "@/components/auth/auth-form";
import PageWrapper from "@/components/layout/page-wrapper";
import Card from "@/components/utils/card";
import initTranslations from "@/locales/i18n";
import {
  AsyncParams,
} from "@/types";
import {
  LoginMode,
} from "@/types/user";

const LoginPage = async ({
  params,
}: AsyncParams) => {
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
      className="pt-30"
    >
      <Card>
        <AuthForm
          mode={LoginMode.Login}
        />
      </Card>
    </PageWrapper>
  );
};

export default LoginPage;
