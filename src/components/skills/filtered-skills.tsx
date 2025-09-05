import {
  includes, isEmpty,
  map,
  orderBy,
  reduce,
} from "lodash";
import React from "react";

import SkillsGroup from "@/components/skills/skills-group";
import {
  DEV_ICONS_MAP, SKILL_DEGREE_MAP, SKILLS, Skills,
} from "@/constants/cv";
import {
  Translate,
} from "@/types";

interface FilteredSkillsProps {
  selectedDegrees?: number[];
  t: Translate;
}

const FilteredSkills = ({
  selectedDegrees = [], t,
}: FilteredSkillsProps) => {

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

  const getFilteredSkills = (skills: string[]) => {
    const filteredSkills = reduce(skills, (acc, s) => {
      const skillKey = s as Skills;
      const skill = {
        name: skillKey,
        icon: DEV_ICONS_MAP[skillKey],
        degree: SKILL_DEGREE_MAP[skillKey],
      };
      if (selectedDegrees.length === 0 || includes(selectedDegrees, skill.degree)) {
        acc.push(skill);
      }
      return acc;
    }, [] as { name: Skills; icon: string; degree: number }[]);

    return orderBy(filteredSkills, ["degree"], ["desc"]);
  };

  const getFilteredGroupedSkills = () => {
    const filteredGroupedSkills = map(groupedSkills, (group) => ({
      ...group,
      skills: getFilteredSkills(group.skills),
    }));

    return filteredGroupedSkills.filter(g => !isEmpty(g.skills));
  };

  const filteredGroupedSkills = getFilteredGroupedSkills();

  if (isEmpty(selectedDegrees)) {
    return (
      <div>
        {t("skills.fallback")}
      </div>
    );
  }

  return (
    <div
      className="flex flex-col gap-20 mt-16 w-full"
    >
      {map(filteredGroupedSkills, (g) => (
        <SkillsGroup
          key={g.title}
          title={g.title}
          skills={g.skills}
        />
      ))}
    </div>
  );
};

export default FilteredSkills;
