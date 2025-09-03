import UserLogout from "@/components/user/user-logout";
import NavLink from "@/components/utils/nav-link";
import {
  ROUTE,
} from "@/constants/route";
import {
  Styles,
} from "@/types/theme";

interface UserControlProps {
  t: (key: string) => string,
  dataOverlay?: string
  userId?: string;
}

export const UserControl = async ({
  dataOverlay, t, userId,
}: UserControlProps) => {
  return (
    <>
      {!userId && (
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
            className="icon-[tabler--login] size-6 text-primary"
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
      {userId && (
      <UserLogout />
      )}
    </>
  );
};
