import HeaderDrawer from "@/components/header/header-drawer";
import Navigation from "@/components/header/navigation";
import {
  UserControl,
} from "@/components/user/user-control";
import LocalePicker from "@/components/utils/locale-picker";
import NavLink from "@/components/utils/nav-link";
import ThemePicker from "@/components/utils/theme-picker";
import {
  APP_TITLE, APP_TITLE_SHORT,
} from "@/constants";
import {
  ROUTE,
} from "@/constants/route";
import {
  verifyAuthSession,
} from "@/db/auth";

interface HeaderProps {
  t: (key: string) => string
}

const Header = async ({
  t,
}: HeaderProps) => {
  const {
    user,
  } = await verifyAuthSession();

  return (
    <header
      className="bg-base-200 absolute w-full border-b-4 border-base-300 mx-auto px-8 py-4 flex items-center justify-end lg:justify-between"
    >
      <div
        className="flex items-center w-full gap-4"
      >
        <NavLink
          href={ROUTE.HOME}
        >
          <h5
            className="px-3.5"
          >
            <span
              className="hidden lg:inline"
            >
              {APP_TITLE}
            </span>
            <span
              className="lg:hidden"
            >
              {APP_TITLE_SHORT}
            </span>
          </h5>
        </NavLink>
        <div
          className="hidden lg:block"
        >
          <Navigation
            t={t}
            userId={user?.id}
          />
        </div>
      </div>

      <div
        className="flex gap-3 items-center"
      >
        <div
          className="hidden lg:flex gap-3 items-center"
        >
          <LocalePicker />
          <ThemePicker />
          <UserControl
            t={t}
            userId={user?.id}
          />
        </div>
      </div>

      <HeaderDrawer
        t={t}
        userId={user?.id}
      />
    </header>
  );
};

export default Header;
