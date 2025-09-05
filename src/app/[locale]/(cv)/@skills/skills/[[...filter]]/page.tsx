import {
  isEmpty, isNil,
} from "lodash";
import React from "react";

import PageWrapper from "@/components/layout/page-wrapper";
import FilteredSkills from "@/components/skills/filtered-skills";
import SkillFilters from "@/components/skills/skill-filters";
import {
  SkillDegree,
} from "@/constants/cv";
import initTranslations from "@/locales/i18n";
import {
  AsyncParams, AsyncSearchParams,
} from "@/types";

type SkillPageProps = AsyncParams & AsyncSearchParams<{ degrees?: string }>;

const SkillsPage = async ({
  params, searchParams,
}: SkillPageProps) => {
  const {
    locale,
  } = await params;

  const {
    degrees,
  } = await searchParams;

  const {
    t,
  } = await initTranslations(locale);

  const getSelectedDegrees = () => {
    if(!isNil(degrees) && isEmpty(degrees)) return [];

    return degrees ?
      degrees.split(",").map(Number) :
      [
        SkillDegree.Junior,
        SkillDegree.Medior,
        SkillDegree.Senior,
      ];
  };

  const selectedDegrees = getSelectedDegrees();


  return (
    <PageWrapper
      title={t("skills.title")}
      description={t("skills.description")}
      className="pt-30"
    >
      <SkillFilters
        selectedDegrees={selectedDegrees}
        t={t}
      />
      <FilteredSkills
        selectedDegrees={selectedDegrees}
        t={t}
      />
    </PageWrapper>
  );
};

export default SkillsPage;
