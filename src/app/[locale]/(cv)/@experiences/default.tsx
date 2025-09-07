import ExperiencePage from "@/app/[locale]/(cv)/@experiences/experiences/page";
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
