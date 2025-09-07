import {
  map,
} from "lodash";
import React from "react";

import SlideIn from "@/components/animators/slide-in";
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
          <SlideIn
            key={skill.name}
            i={i}
          >
            <SkillCard
              name={skill.name}
              icon={skill.icon}
              degree={skill.degree}
            />
          </SlideIn>
        ))}
      </div>
    </div>
  );
};

export default SkillsGroup;
