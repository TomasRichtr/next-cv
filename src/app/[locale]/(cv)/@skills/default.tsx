import SkillsPage from "@/app/[locale]/(cv)/@skills/skills/[[...filter]]/page";
import {
  AsyncParams,
} from "@/types";

const SkillsDefault = ({
  params,
}: AsyncParams) => {
  return (
    <SkillsPage
      params={params}
    />
  );
};

export default SkillsDefault;
