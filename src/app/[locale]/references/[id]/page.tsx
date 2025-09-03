import {
  notFound,
} from "next/navigation";

import {
  LoadingSection,
} from "@/components/layout/loading-section";
import PageWrapper from "@/components/layout/page-wrapper";
import ReferenceList from "@/components/reference/reference-list";
import {
  getReferenceById,
} from "@/db/dao/reference";
import initTranslations from "@/locales/i18n";
import {
  AsyncParams,
} from "@/types";

interface ReferencePageProps {
  locale: string;
  id?: string;
}

const ReferenceDetailPage = async ({
  params,
}: AsyncParams<ReferencePageProps>) => {
  const {
    id, locale,
  } = await params;

  if (!id) {
    return notFound();
  }

  const {
    t,
  } = await initTranslations(locale);

  const reference = getReferenceById(+id);

  if (!reference) {
    notFound();
  }

  return (
    <PageWrapper
      title={t("references.title")}
      description={t("references.description")}
      className="pt-30"
    >
      <LoadingSection>
        <ReferenceList />
      </LoadingSection>
    </PageWrapper>
  );
};

export default ReferenceDetailPage;
