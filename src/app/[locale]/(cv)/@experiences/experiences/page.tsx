import ExperienceTimeline from "@/components/experiences/experience-timeline";
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
      title={t("experiences.title")}
      description={t("experiences.description")}
      className="pt-30"
    >
      <ExperienceTimeline
        t={t}
      />
    </PageWrapper>
  );
};

export default ExperiencePage;
