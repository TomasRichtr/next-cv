import myPhoto from "@/assets/my-photo.png";
import CenteredAvatar from "@/components/home/centered-avatar";
import HomeContent from "@/components/home/home-content";
import HeroBackground from "@/components/layout/hero-background";
import PageWrapper from "@/components/layout/page-wrapper";
import initTranslations from "@/locales/i18n";
import {
  AsyncParams,
} from "@/types";
import {
  Colors,
  Sizes,
} from "@/types/theme";


const HomePage = async ({
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
      className="relative"
    >
      <HeroBackground
        className="h-[50vh]"
      >
        <div
          className="absolute bottom-0 border-t-4 border-base-content w-full"
        />
      </HeroBackground>
      <CenteredAvatar
        image={myPhoto}
        size={Sizes.XL}
        offset={{
          x: 0,
          y: 15,
        }}
      />
      <HomeContent
        roleText={t("home.role")}
        statusText={t("home.status")}
      />
    </PageWrapper>
  );
};

export default HomePage;
