import LocalePicker from "@/components/utils/localePicker";
import NavLink from "@/components/utils/navLink";
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
      </nav>
      <LocalePicker />
    </header>
  );
};

export default Header;
