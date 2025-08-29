import Image from "next/image";

import nextJSImg from "@/assets/nextjs.webp";
import {
  LocaleParam,
} from "@/types";
import initTranslations from "@/utils/locales/i18n";

const HomePage = async ({
  params,
}: LocaleParam) => {
  const {
    locale,
  } = await params;

  const {
    t,
  } = await initTranslations(locale);

  return (
    <>
      <h1
        className="text-7xl"
      >
        {t("title")}
      </h1>
      <p
        className="text-2xl"
      >
        {t("description")}
      </p>
      <Image
        src={nextJSImg}
        alt="dsds"
      />
    </>
  );
};

export default HomePage;
