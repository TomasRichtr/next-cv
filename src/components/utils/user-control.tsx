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
import NavLink from "@/components/utils/nav-link";
import {
  ROUTE,
} from "@/constants/route";
import {
  Colors, Styles,
} from "@/types/theme";

export const UserControl = ({
  user, dataOverlay,
}: {
  user: {id: string} | null,
  dataOverlay?: string
}) => {
  const [_, formAction] = useActionState(logout, undefined);

  const {
    t,
  } = useTranslation();

  return (
    <>
      {!user && (
      <div
        className="tooltip [--placement:bottom]"
      >
        <NavLink
          href={ROUTE.LOGIN}
          activeFor={[ROUTE.SIGNUP, ROUTE.LOGIN]}
          style={Styles.Soft}
          dataOverlay={dataOverlay}
        >
          <span
            className="icon-[tabler--login] size-6 text-primary-content"
          />
        </NavLink>
        <span
          className="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible"
          role="tooltip"
        >
          <span
            className="tooltip-body"
          >
            {t("navigation.login")}
          </span>
        </span>
      </div>
      )}
      {user && (
      <form
        id="logout-form"
        action={formAction}
      >
        <div
          className="tooltip [--placement:bottom]"
        >
          <button
            type="submit"
            className="tooltip-toggle btn btn-soft"
            aria-label={t("login.actions.logout")}
          >
            <span
              className="icon-[tabler--logout] size-6 text-primary-content"
            />
          </button>
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
      )}
    </>
  );
};
