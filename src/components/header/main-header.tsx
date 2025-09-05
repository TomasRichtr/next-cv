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
  HEADER_DRAWER_ID,
} from "@/constants/theme";

interface HeaderProps {
  t: (key: string) => string
  userId?: string;
}

const MainHeader = async ({
  t, userId,
}: HeaderProps) => {
  return (
    <header
      className="w-full z-10 fixed bg-base-200 border-b border-base-content mx-auto px-8 py-4 flex items-center justify-end lg:justify-between"
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
              className="hidden xl:inline truncate"
            >
              {APP_TITLE}
            </span>
            <span
              className="xl:hidden"
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
            userId={userId}
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
            userId={userId}
          />
        </div>
      </div>

      <button
        type="button"
        className="btn btn-text btn-circle lg:hidden btn-lg"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls={HEADER_DRAWER_ID}
        data-overlay={`#${HEADER_DRAWER_ID}`}
      >
        <span
          className="icon-[tabler--menu-2] size-8 text-primary"
        />
      </button>
    </header>
  );
};

export default MainHeader;
