import React from "react";

import PageWrapper from "@/components/layout/page-wrapper";
import ErrorCard from "@/components/utils/error-card";
import initTranslations from "@/locales/i18n";

const NotFound = async ({
  locale,
}: { locale: string }) => {
  const {
    t,
  } = await initTranslations(locale);

  return (
    <PageWrapper
      className="pt-30 mx-0! text-center flex flex-col items-center justify-center h-full"
      title={t("notFound.title")}
      description={t("notFound.description")}
    >
      <div
        className="flex flex-col items-center justify-center h-full"
      >
        <ErrorCard />
      </div>

    </PageWrapper>
  );
};

export default NotFound;
