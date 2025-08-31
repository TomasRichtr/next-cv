import myPhoto from "@/assets/my-photo.png";
import CenteredAvatar from "@/components/home/centered-avatar";
import HomeContent from "@/components/home/home-content";
import HeroBackground from "@/components/layout/hero-background";
import PageWrapper from "@/components/layout/page-wrapper";
import initTranslations from "@/locales/i18n";
import {
  LocaleParam,
} from "@/types";
import {
  Colors,
  Sizes,
} from "@/types/theme";


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
      <HeroBackground />
      <CenteredAvatar
        image={myPhoto}
        size={Sizes.XL}
        backgroundColor={Colors.PrimaryContent}
        offset={{
          x: 0,
          y: 15,
        }}
      />
      <PageWrapper>
        <div
          className="relative z-10 h-[50vh]"
        />
        <HomeContent
          roleText={t("home.role")}
          statusText={t("home.status")}
        />
      </PageWrapper>
    </>
  );
};

export default HomePage;
