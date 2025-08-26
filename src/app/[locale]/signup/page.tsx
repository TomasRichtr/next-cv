import AuthForm from "@/components/forms/auth-form";
import {
  LoginMode,
} from "@/types/user";
import {
  Shield, usePageProtection,
} from "@/utils/composables/usePageProtection";

const SignUpPage = async () => {
  await usePageProtection([Shield.SIGN_UP]);

  return (
    <AuthForm
      mode={LoginMode.Signup}
    />
  );
};

export default SignUpPage;
