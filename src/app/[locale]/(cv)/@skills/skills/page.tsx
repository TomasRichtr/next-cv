import {
  orderBy,
} from "lodash";
import React from "react";

import PageWrapper from "@/components/layout/page-wrapper";
import SkillCard from "@/components/skills/SkillCard";
import {
  DEV_ICONS_MAP, SKILL_DEGREE_MAP, Skills, SKILLS,
} from "@/constants/cv";
import initTranslations from "@/locales/i18n";
import {
  AsyncParams,
} from "@/types";

const SkillsPage = async ({
  params,
}: AsyncParams) => {
  const {
    locale,
  } = await params;

  const {
    t,
  } = await initTranslations(locale);

  const mapGroupSkills = (skills: Skills[]) => {
    return orderBy(skills.map(s => {
      return {
        name: s,
        icon: DEV_ICONS_MAP[s],
        degree: SKILL_DEGREE_MAP[s],
      };
    }), ["degree"], ["desc"]);
  };

  const groupedSkills = [
    {
      title: t("skills.groups.frontend"),
      skills: mapGroupSkills([
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
      ]),
    },
    {
      title: t("skills.groups.backend"),
      skills: mapGroupSkills([SKILLS.NODE_JS, SKILLS.GRAPHQL, SKILLS.REST_API]),
    },
    {
      title: t("skills.groups.database"),
      skills: mapGroupSkills([SKILLS.MYSQL, SKILLS.SQLITE, SKILLS.ELASTIC_SEARCH, SKILLS.KNEX]),
    },
    {
      title: t("skills.groups.testing"),
      skills: mapGroupSkills([SKILLS.CYPRESS, SKILLS.JEST, SKILLS.MOCHA, SKILLS.PLAYWRIGHT, SKILLS.VITEST]),
    },
    {
      title: t("skills.groups.tools"),
      skills: mapGroupSkills([SKILLS.GIT, SKILLS.DOCKER, SKILLS.NETLIFY_FUNCTIONS]),
    },
  ];

  return (
    <PageWrapper
      title={t("skills.title")}
      description={t("skills.description")}
      className="pt-30"
    >
      <div
        className="flex flex-col gap-12"
      >
        {groupedSkills.map((g) => {
          return (
            <div
              key={g.title}
            >
              <h4
                className="mb-6 pl-1.5"
              >
                {g.title}
              </h4>
              <div
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 w-full"
              >
                {g.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    degree={skill.degree}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </PageWrapper>
  );
};

export default SkillsPage;
