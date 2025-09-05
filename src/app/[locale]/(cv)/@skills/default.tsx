import SkillsPage from "@/app/[locale]/(cv)/@skills/skills/[[...filter]]/page";
import {
  AsyncParams, AsyncSearchParams,
} from "@/types";

const SkillsDefault = ({
  params, searchParams,
}: AsyncParams & AsyncSearchParams<{degrees?: string}>) => {
  return (
    <SkillsPage
      params={params}
      searchParams={searchParams}
    />
  );
};

export default SkillsDefault;
