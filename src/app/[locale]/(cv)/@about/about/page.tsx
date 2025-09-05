import AboutMeCard from "@/components/about/about-me-card";
import ContactsCard from "@/components/about/contacts-card";
import PageWrapper from "@/components/layout/page-wrapper";
import initTranslations from "@/locales/i18n";
import {
  AsyncParams,
} from "@/types";

const AboutPage = async ({
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
      title="About Me"
      description="Full-stack developer with 5+ years of experience specializing in Vue.js and React across multiple industries"
      className="pt-30 mx-0!"
    >
      <div
        className="flex items-center justify-center gap-10 w-full flex-col lg:flex-row"
      >
        <ContactsCard />

        <AboutMeCard
          t={t}
        />
      </div>
    </PageWrapper>
  );
};

export default AboutPage;
