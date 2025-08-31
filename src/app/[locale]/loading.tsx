import Loader from "@/components/utils/loader";
import initTranslations from "@/locales/i18n";

const Loading = async ({
  locale,
}: { locale: string }) => {
  const {
    t,
  } = await initTranslations(locale);

  return (
    <Loader
      text={t("loading")}
    />
  );
};

export default Loading;
