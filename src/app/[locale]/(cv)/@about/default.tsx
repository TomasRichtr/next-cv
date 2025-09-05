import AboutPage from "@/app/[locale]/(cv)/@about/about/page";
import {
  AsyncParams,
} from "@/types";

const AboutDefault = ({
  params,
}: AsyncParams) => {
  return (
    <AboutPage
      params={params}
    />
  );
};

export default AboutDefault;
