import ExperienceTimeline from "@/components/experience/experience-timeline";
import PageWrapper from "@/components/layout/page-wrapper";
import initTranslations from "@/locales/i18n";
import {
  AsyncParams,
} from "@/types";

const ExperiencePage = async ({
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
      title={t("experience.title")}
      description={t("experience.description")}
      className="pt-30"
    >
      <ExperienceTimeline
        t={t}
      />
    </PageWrapper>
  );
};

export default ExperiencePage;
