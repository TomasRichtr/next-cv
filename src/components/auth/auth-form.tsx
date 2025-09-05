"use client";

import {
  useActionState,
} from "react";
import {
  useTranslation,
} from "react-i18next";

import {
  auth,
} from "@/actions/user";
import Form from "@/components/forms/form";
import FormButton from "@/components/forms/form-button";
import WithSkeleton from "@/components/layout/with-skeleton";
import NavLink from "@/components/utils/nav-link";
import {
  ROUTE,
} from "@/constants/route";
import {
  Colors,
} from "@/types/theme";
import {
  FormFields, LoginMode,
} from "@/types/user";

import TextInput from "../forms/inputs/text-input";

const AuthForm = ({
  mode,
}: { mode: LoginMode }) => {
  const [
    formState, formAction,
  ] = useActionState(auth.bind(null, mode), undefined);

  const {
    t,
  } = useTranslation();

  return (
    <Form
      id="auth-form"
      formAction={formAction}
    >
      <WithSkeleton
        heightClass="h-12"
        widthClass="w-full"
      >
        <TextInput
          type="email"
          name={FormFields.Email}
          id={FormFields.Email}
          label={t("login.labels.email")}
          defaultValue={formState?.data.email}
          error={formState?.field === "email" ? formState.message : undefined}
        />
      </WithSkeleton>
      <div
        className="flex flex-col gap-6"
      >
        <WithSkeleton
          heightClass={`${mode === LoginMode.Signup ? "h-20" : "h-12"}`}
          widthClass={`${mode === LoginMode.Signup ? "w-full md:w-[578px]" : "w-full"}`}
        >
          <TextInput
            type="password"
            name={FormFields.Password}
            id={FormFields.Password}
            label={t("login.labels.password")}
            defaultValue={formState?.data.password}
            meterPassword={mode === LoginMode.Signup}
            error={formState?.field === "password" ? formState.message : undefined}
          />
        </WithSkeleton>
        {mode === LoginMode.Signup && (
        <WithSkeleton
          heightClass="h-12"
          widthClass="w-full"
        >
          <TextInput
            type="password"
            name={FormFields.ConfirmPassword}
            id={FormFields.ConfirmPassword}
            label={t("login.labels.confirmPassword")}
            defaultValue={formState?.data.confirmPassword}
            error={formState?.field === "confirmPassword" ? formState.message : undefined}
          />
        </WithSkeleton>
        )}
      </div>
      {
        formState?.message && !formState?.field && (
        <p
          className="text-red-600"
        >
          {t(formState.message)}
        </p>
        )
      }
      <div
        className="flex flex-col md:flex-row items-center gap-3 justify-between"
      >
        <FormButton
          color={Colors.Primary}
          label={mode === LoginMode.Signup ? t("login.actions.signup") : t("login.actions.login")}
        />
        <div>
          {mode === LoginMode.Login && (
          <NavLink
            href={ROUTE.SIGNUP}
            activeFor={[]}
          >
            {t("login.actions.signup")}
          </NavLink>
          )}

          {mode === LoginMode.Signup && (
          <NavLink
            href={ROUTE.LOGIN}
            activeFor={[]}
          >
            {t("login.actions.loginLink")}
          </NavLink>
          )}
        </div>
      </div>
    </Form>
  );
};

export default AuthForm;
