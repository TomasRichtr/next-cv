import Loader from "@/components/utils/loader";
import initTranslations from "@/locales/i18n";

const Loading = async ({
  locale,
}: { locale: string }) => {
  const {
    t,
  } = await initTranslations(locale);

  return (
    <div
      className="flex items-center justify-center h-screen"
    >
      <Loader
        text={t("loading")}
      />
    </div>

  );
};

export default Loading;
