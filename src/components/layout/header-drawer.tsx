import Navigation from "@/components/layout/navigation";
import LocalePicker from "@/components/utils/locale-picker";
import ThemePicker from "@/components/utils/theme-picker";
import {
  UserControl,
} from "@/components/utils/user-control";

interface HeaderDrawerProps {
  t: (key: string) => string;
  user: {id: string} | null;
}

const HeaderDrawer = ({
  t, user,
}: HeaderDrawerProps) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-text btn-circle md:hidden btn-lg"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="mobile-drawer"
        data-overlay="#mobile-drawer"
      >
        <span
          className="icon-[tabler--menu-2] size-8 text-primary-content"
        />
      </button>

      <div
        id="mobile-drawer"
        className="overlay overlay-open:translate-x-0 drawer drawer-end hidden"
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
              className="drawer-title text-primary-content"
            >
              Tomas Richtr - CV
            </h5>
            <button
              type="button"
              className="btn btn-text btn-circle btn-sm absolute end-3 top-3"
              aria-label="Close"
              data-overlay="#mobile-drawer"
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
              t={t}
              user={user}
              dataOverlay="#mobile-drawer"
            />
          </div>
          <div
            className="drawer-footer"
          >
            <div
              className="flex justify-center gap-3 w-full"
            >
              <LocalePicker />
              <ThemePicker />
              <UserControl
                dataOverlay="#mobile-drawer"
                user={user}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderDrawer;
