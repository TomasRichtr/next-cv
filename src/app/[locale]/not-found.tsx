import {
  NAMESPACE,
} from "@/constants/locales";
import {
  LocaleParam,
} from "@/types";
import initTranslations from "@/utils/locales/i18n";

import classes from "./not-found.module.css";

const NotFound = async ({
  locale,
}: { locale: string }) => {
  const {
    t,
  } = await initTranslations(locale, [
    NAMESPACE.COMMON,
  ]);

  return (
    <main
      className={classes.notFound}
    >
      <h1>
        {t("notFound.title")}
      </h1>
      <p>
        {t("notFound.description")}
      </p>
    </main>
  );
};

export default NotFound;
