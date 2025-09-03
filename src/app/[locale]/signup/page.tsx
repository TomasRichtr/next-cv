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
import {
  Shield, protectPage,
} from "@/utils/protectPage";

const SignUpPage = async ({
  params,
}: AsyncParams) => {
  await protectPage([Shield.SIGN_UP]);

  const {
    locale,
  } = await params;

  const {
    t,
  } = await initTranslations(locale);

  return (
    <PageWrapper
      title={t("signup.title")}
      description={t("signup.description")}
      className="pt-30"
    >
      <Card>
        <AuthForm
          mode={LoginMode.Signup}
        />
      </Card>
    </PageWrapper>
  );
};

export default SignUpPage;
