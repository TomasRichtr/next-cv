import AboutPage from "@/app/[locale]/(cv)/@about/about/page";
import {
  AsyncParams,
} from "@/types";

const AboutDefault = (
  params: AsyncParams["params"],
) => {

  return (
    <AboutPage
      params={params}
    />
  );
};

export default AboutDefault;
