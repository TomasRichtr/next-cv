import {
  NAMESPACE,
} from "@/constants/locales";
import initTranslations from "@/utils/locales/i18n";

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
      className="mt-20 text-center"
    >
      <h1
        className="text-8xl m-0 font-black uppercase bg-cover bg-center font-montserrat bg-gradient-to-r from-error to-warning bg-clip-text text-transparent"
      >
        {t("notFound.title")}
      </h1>
      <p
        className="text-2xl font-medium text-secondary-300"
      >
        {t("notFound.description")}
      </p>
    </main>
  );
};

export default NotFound;
