import AuthForm from "@/components/auth/auth-form";
import PageWrapper from "@/components/layout/page-wrapper";
import initTranslations from "@/locales/i18n";
import {
  LocaleParam,
} from "@/types";
import {
  LoginMode,
} from "@/types/user";
import {
  Shield, protectPage,
} from "@/utils/protectPage";

const SignUpPage = async ({
  params,
}: LocaleParam) => {
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
    >
      <AuthForm
        mode={LoginMode.Signup}
      />
    </PageWrapper>
  );
};

export default SignUpPage;
