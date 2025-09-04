import React from "react";

import SkillBadge from "@/components/experience/skill-badge";
import TimelineDateHeader from "@/components/experience/timeline-date-header";
import {
  Experience,
} from "@/constants/cv";

interface ExperienceItemProps {
  experience: Experience;
  t: (key: string) => string;
  index: number;
}

const ExperienceItem = ({
  experience,
  t,
  index,
}: ExperienceItemProps) => {
  return (
    <div
      className="timeline-end ms-2 w-full rounded-lg"
    >
      <div
        className={`my-4 ${index !== 0 ? "border-t-2 border-primary" : ""}`}
      />
      <TimelineDateHeader
        experience={experience}
        t={t}
      />
      <div
        className="text-base-content font-medium text-lg"
      >
        {experience.position}
      </div>

      <div
        className="mb-2"
      >
        <a
          href={experience.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary-focus font-medium"
        >
          {experience.place}
        </a>
      </div>

      <p
        className="mb-3 text-base-content/80 leading-relaxed"
      >
        {experience.description}
      </p>

      {experience.projects?.length && (
        <div
          className="mb-4 border-t border-primary pt-3"
        >
          <p
            className="font-semibold text-base-content/90 mb-1 uppercase tracking-wide"
          >
            {t("experience.projects")}
            :
          </p>
          <ul
            className="space-y-3 "
          >
            {experience.projects.map((project, index) => (
              <li
                key={index}
                className="flex items-start gap-2"
              >
                <div
                  className="flex-1"
                >
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-focus font-medium block"
                    >
                      {project.name}
                    </a>
                  ) : (
                    <span
                      className="font-medium text-base-content block"
                    >
                      {project.name}
                    </span>
                  )}
                  <p
                    className="text-base-content/70 leading-relaxed"
                  >
                    {project.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div
        className="flex flex-wrap gap-1.5! lg:gap-3! border-t border-primary pt-4"
      >
        {experience.skills.map((skill, skillIndex) => (
          <SkillBadge
            key={skillIndex}
            skill={skill}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceItem;
