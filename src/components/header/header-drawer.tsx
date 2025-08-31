import Navigation from "@/components/header/navigation";
import {
  UserControl,
} from "@/components/user/user-control";
import LocalePicker from "@/components/utils/locale-picker";
import ThemePicker from "@/components/utils/theme-picker";
import {
  APP_TITLE,
} from "@/constants";

interface HeaderDrawerProps {
  t: (key: string) => string
  userId?: string;
}

const HEADER_DRAWER_ID = "mobile-drawer";

const HeaderDrawer = ({
  t, userId,
}: HeaderDrawerProps) => {
  return (
    <>
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

      <div
        id={HEADER_DRAWER_ID}
        className="overlay overlay-open:translate-x-0 drawer drawer-end fixed"
        role="dialog"
        tabIndex={-1}
      >
        <div
          className="flex flex-col h-full bg-base-100"
        >
          <div
            className="drawer-header"
          >
            <h5
              className="drawer-title text-primary"
            >
              {APP_TITLE}
            </h5>
            <button
              type="button"
              className="btn btn-text btn-circle btn-sm absolute end-3 top-3"
              aria-label="Close"
              data-overlay={`#${HEADER_DRAWER_ID}`}
            >
              <span
                className="icon-[tabler--x] size-5"
              />
            </button>
          </div>
          <div
            className="drawer-body flex-1 overflow-y-auto"
          >
            <Navigation
              dataOverlay={`#${HEADER_DRAWER_ID}`}
              t={t}
              userId={userId}
            />
          </div>
          <div
            className="drawer-footer"
          >
            <div
              className="flex justify-start gap-3 w-full"
            >
              <LocalePicker />
              <ThemePicker />
              <UserControl
                t={t}
                dataOverlay={`#${HEADER_DRAWER_ID}`}
                userId={userId}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderDrawer;
