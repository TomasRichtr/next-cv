import React from "react";

import ErrorCard from "@/components/utils/error-card";
import initTranslations from "@/locales/i18n";

const NotFound = async ({
  locale,
}: { locale: string }) => {
  const {
    t,
  } = await initTranslations(locale);

  return (
    <main
      className="mt-20 text-center"
    >
      <h1
        className="text-8xl m-0 font-black uppercase bg-cover bg-center font-montserrat bg-linear-to-r from-error to-warning bg-clip-text text-transparent"
      >
        {t("notFound.title")}
      </h1>
      <p
        className="text-2xl font-medium text-secondary-300"
      >
        {t("notFound.description")}
      </p>
      <ErrorCard />
    </main>
  );
};

export default NotFound;
