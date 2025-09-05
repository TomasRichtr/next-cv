"use client";
import {
  useActionState,
} from "react";
import {
  useTranslation,
} from "react-i18next";

import {
  logout,
} from "@/actions/user";
import FormButton from "@/components/forms/form-button";
import {
  Colors, Styles,
} from "@/types/theme";

const UserLogout = () => {
  const {
    t,
  } = useTranslation();

  const [
    _, formAction,
  ] = useActionState(logout, undefined);

  return (
    <form
      id="logout-form"
      action={formAction}
    >
      <div
        className="tooltip [--placement:bottom]"
      >
        <FormButton
          aria-label={t("login.actions.logout")}
          style={Styles.Soft}
          color={Colors.Secondary}
        >
          <span
            className="icon-[tabler--logout] size-6 text-primary"
          />
        </FormButton>
        <span
          className="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible"
          role="tooltip"
        >
          <span
            className="tooltip-body"
          >
            {t("login.actions.logout")}
          </span>
        </span>
      </div>
    </form>
  );
};

export default UserLogout;
