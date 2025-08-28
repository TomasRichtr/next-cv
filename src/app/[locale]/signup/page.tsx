import AuthForm from "@/components/forms/auth-form";
import {
  LoginMode,
} from "@/types/user";
import {
  Shield, protectPage,
} from "@/utils/composables/protectPage";

const SignUpPage = async () => {
  await protectPage([Shield.SIGN_UP]);

  return (
    <AuthForm
      mode={LoginMode.Signup}
    />
  );
};

export default SignUpPage;
