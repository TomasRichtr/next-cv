import {
  isEmpty,
} from "lodash";
import React from "react";

import PageWrapper from "@/components/layout/page-wrapper";
import FilteredSkills from "@/components/skills/filtered-skills";
import SkillFilters from "@/components/skills/skill-filters";
import {
  SkillDegree,
  SKILLS,
} from "@/constants/cv";
import initTranslations from "@/locales/i18n";
import {
  AsyncParams, AsyncSearchParams,
} from "@/types";

type SkillPageProps = AsyncParams<{ locale: string }> & AsyncSearchParams<{ degrees?: string }>;

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
    if(isEmpty(degrees)) return [];

    return degrees ?
      degrees.split(",").map(Number) :
      [
        SkillDegree.Junior,
        SkillDegree.Medior,
        SkillDegree.Senior,
      ];
  };

  const selectedDegrees = getSelectedDegrees();

  const groupedSkills = [
    {
      title: t("skills.groups.frontend"),
      skills: [
        SKILLS.CSS,
        SKILLS.HTML,
        SKILLS.JAVASCRIPT,
        SKILLS.TYPESCRIPT,
        SKILLS.REACT,
        SKILLS.VUE,
        SKILLS.NEXT_JS,
        SKILLS.NUXT,
        SKILLS.TAILWIND,
        SKILLS.SASS,
        SKILLS.JQUERY,
      ],
    },
    {
      title: t("skills.groups.backend"),
      skills: [SKILLS.NODE_JS,
        SKILLS.GRAPHQL,
        SKILLS.REST_API],
    },
    {
      title: t("skills.groups.database"),
      skills: [SKILLS.MYSQL,
        SKILLS.SQLITE,
        SKILLS.ELASTIC_SEARCH,
        SKILLS.KNEX],
    },
    {
      title: t("skills.groups.testing"),
      skills: [SKILLS.CYPRESS,
        SKILLS.JEST,
        SKILLS.MOCHA,
        SKILLS.PLAYWRIGHT,
        SKILLS.VITEST],
    },
    {
      title: t("skills.groups.tools"),
      skills: [SKILLS.GIT,
        SKILLS.DOCKER,
        SKILLS.NETLIFY_FUNCTIONS],
    },
  ];


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
        groupedSkills={groupedSkills}
        selectedDegrees={selectedDegrees}
      />
    </PageWrapper>
  );
};

export default SkillsPage;
