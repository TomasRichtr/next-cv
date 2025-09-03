import {
  LoadingSection,
} from "@/components/layout/loading-section";
import PageWrapper from "@/components/layout/page-wrapper";
import ReferenceList from "@/components/reference/reference-list";
import initTranslations from "@/locales/i18n";
import {
  AsyncParams,
} from "@/types";

const ReferencesPage = async ({
  params,
}: AsyncParams) => {
  const {
    locale,
  } = await params;

  const {
    t,
  } = await initTranslations(locale);

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

export default ReferencesPage;
