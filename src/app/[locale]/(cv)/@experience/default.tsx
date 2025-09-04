import ExperiencePage from "@/app/[locale]/(cv)/@experience/experience/page";
import {
  AsyncParams,
} from "@/types";

const ExperienceDefault = ({
  params,
}: AsyncParams) => {
  return (
    <ExperiencePage
      params={params}
    />
  );
};

export default ExperienceDefault;
