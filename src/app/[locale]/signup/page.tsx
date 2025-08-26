import {
  redirect,
} from "next/navigation";

import AuthForm from "@/components/forms/auth-form";
import {
  ROUTE,
} from "@/constants/route";
import {
  LoginMode,
} from "@/types/user";

const SignUpPage = async () => {
  const allowRegistration = process.env.ALLOW_USERS_REGISTRATION === "true";
  if (!allowRegistration) {
    return redirect(ROUTE.HOME);
  }

  return (
    <AuthForm
      mode={LoginMode.Signup}
    />
  );
};

export default SignUpPage;
