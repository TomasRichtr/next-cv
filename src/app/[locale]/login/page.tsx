import AuthForm from "@/components/forms/auth-form";
import {
  LoginMode,
} from "@/types/user";

const LoginPage = async () => {
  return (
    <AuthForm
      mode={LoginMode.Login}
    />
  );
};

export default LoginPage;
