import {
  map,
} from "lodash";
import React from "react";

import AnimateItem from "@/components/animators/animate-item";
import SkillCard from "@/components/skills/skill-card";

interface Skill {
  name: string;
  icon: string;
  degree: number;
}

interface SkillsGroupProps {
  title: string;
  skills: Skill[];
}

const SkillsGroup: React.FC<SkillsGroupProps> = ({
  title, skills,
}) => {
  return (
    <div>
      <h4
        className="mb-6 pl-1.5 divider divider-primary"
      >
        {title}
      </h4>
      <div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 w-full"
      >
        {map(skills, (skill, i) => (
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
  );
};

export default SkillsGroup;
