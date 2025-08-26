"use client";
import {
  useActionState,
} from "react";
import {
  useTranslation,
} from "react-i18next";

import {
  logout,
} from "@/backend/actions/user";
import FormButton from "@/components/forms/form-button";

export const LogoutForm = () => {
  const [_, formAction] = useActionState(logout, undefined);

  const {
    t,
  } = useTranslation();

  return (
    <form
      id="logout-form"
      action={formAction}
    >
      <FormButton
        label={t("login.actions.logout")}
        variant="secondary"
      />
    </form>
  );
};
