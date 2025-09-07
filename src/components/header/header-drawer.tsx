import Navigation from "@/components/header/navigation";
import {
  UserControl,
} from "@/components/user/user-control";
import LocalePicker from "@/components/utils/locale-picker";
import ThemePicker from "@/components/utils/theme-picker";
import {
  APP_TITLE,
} from "@/constants";
import {
  HEADER_DRAWER_ID,
} from "@/constants/theme";

interface HeaderDrawerProps {
  t: (key: string) => string
  userId?: string;
}

const HeaderDrawer = ({
  t, userId,
}: HeaderDrawerProps) => {
  return (
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
            className="btn btn-text px-0!"
            aria-label="Close"
            data-overlay={`#${HEADER_DRAWER_ID}`}
          >
            <span
              className="icon-[tabler--x] size-8 text-primary"
            />
          </button>
        </div>
        <div
          className="drawer-body flex-1 overflow-y-auto"
          data-overlay={`#${HEADER_DRAWER_ID}`}
        >
          <Navigation
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
            <div
              data-overlay={`#${HEADER_DRAWER_ID}`}
            >
              <LocalePicker />
            </div>
            <ThemePicker />
            <div
              data-overlay={`#${HEADER_DRAWER_ID}`}
            >
              <UserControl
                t={t}
                userId={userId}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDrawer;
