import {
  verifyAuthSession,
} from "@/backend/db/auth";
import HeaderDrawer from "@/components/layout/header-drawer";
import Navigation from "@/components/layout/navigation";
import LocalePicker from "@/components/utils/locale-picker";
import NavLink from "@/components/utils/nav-link";
import ThemePicker from "@/components/utils/theme-picker";
import {
  UserControl,
} from "@/components/utils/user-control";
import {
  APP_TITLE, APP_TITLE_SHORT,
} from "@/constants";
import {
  NAMESPACE,
} from "@/constants/locales";
import {
  ROUTE,
} from "@/constants/route";
import {
  Colors, Styles,
} from "@/types/theme";
import initTranslations from "@/utils/locales/i18n";

const Header = async ({
  locale,
}: {locale: string}) => {

  const {
    t,
  } = await initTranslations(locale, [NAMESPACE.COMMON]);

  const {
    user,
  } = await verifyAuthSession();

  return (
    <header
      className="w-full bg-background border-b mx-auto px-8 py-4 flex items-center justify-end md:justify-between"
    >
      <div
        className="flex items-center w-full gap-4"
      >
        <NavLink
          href={ROUTE.HOME}
        >
          <h5
            className="text-primary px-3.5"
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
          className="hidden md:block"
        >
          <Navigation
            t={t}
            user={user}
          />
        </div>
      </div>

      <div
        className="flex gap-3 items-center"
      >
        <div
          className="hidden md:flex gap-3 items-center"
        >
          <LocalePicker />
          <ThemePicker />
          <UserControl
            user={user}
          />
        </div>
      </div>

      <HeaderDrawer
        t={t}
        user={user}
      />
    </header>
  );
};

export default Header;
