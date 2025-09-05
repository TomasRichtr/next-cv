import {
  includes,
  map,
  orderBy,
  reduce,
} from "lodash";
import React from "react";

import AnimateItem from "@/components/animators/animate-item";
import SkillCard from "@/components/skills/skill-card";
import {
  DEV_ICONS_MAP, SKILL_DEGREE_MAP, Skills,
} from "@/constants/cv";

interface GroupedSkill {
  title: string;
  skills: string[];
}

interface FilteredSkillsProps {
  groupedSkills: GroupedSkill[];
  selectedDegrees?: number[];
}

const FilteredSkills = ({
  groupedSkills, selectedDegrees = [],
}: FilteredSkillsProps) => {
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

  const filteredGroupedSkills = map(groupedSkills, (group) => ({
    ...group,
    skills: getFilteredSkills(group.skills),
  }));

  if (selectedDegrees.length === 0) {
    return (
      <div>
        Please select degrees to filter skills.
      </div>
    );
  }

  return (
    <div
      className="flex flex-col gap-12"
    >
      {map(filteredGroupedSkills, (g) => (
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
            {map(g.skills, (skill, i) => (
              <AnimateItem
                key={skill.name}
                i={i}
              >
                <SkillCard
                  name={skill.name}
                  icon={skill.icon}
                  degree={skill.degree}
                />
              </AnimateItem>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilteredSkills;
