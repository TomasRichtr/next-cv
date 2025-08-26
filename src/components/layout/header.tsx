import {
  verifyAuthSession,
} from "@/backend/db/auth";
import {
  LogoutForm,
} from "@/components/forms/logout-form";
import LocalePicker from "@/components/utils/locale-picker";
import NavLink from "@/components/utils/nav-link";
import {
  NAMESPACE,
} from "@/constants/locales";
import {
  ROUTE,
} from "@/constants/route";
import initTranslations from "@/utils/locales/i18n";

const Header = async ({
  locale,
}: {locale?: string}) => {

  const {
    t,
  } = await initTranslations(locale!, [NAMESPACE.COMMON]);

  const {
    user,
  } = await verifyAuthSession();

  return (
    <header
      className="w-full bg-background border-b mx.auto px-6 py-6 flex justify-between"
    >
      <nav>
        <NavLink
          href={ROUTE.HOME}
        >
          {t("navigation.home")}
        </NavLink>

        {!user && (
        <NavLink
          href={ROUTE.LOGIN}
          activeFor={[ROUTE.SIGNUP, ROUTE.LOGIN]}
        >
          {t("navigation.login")}
        </NavLink>
        )}

        {user && (
        <NavLink
          href={ROUTE.USER}
        >
          {t("navigation.user")}
        </NavLink>
        )}
      </nav>


      <div
        className="flex gap-3 items-center"
      >
        <LocalePicker />
        {user && <LogoutForm />}
      </div>
    </header>
  );
};

export default Header;
