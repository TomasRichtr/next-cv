import React from "react";

import ExperienceItem from "@/components/experience/experience-item";
import TimelineBadge from "@/components/experience/timeline-badge";
import TimelineDateHeader from "@/components/experience/timeline-date-header";
import Card from "@/components/utils/card";
import {
  EXPERIENCES,
} from "@/constants/cv";

interface ExperienceTimelineProps {
  t: (key: string) => string;
}

const ExperienceTimeline = ({
  t,
}: ExperienceTimelineProps) => {
  return (
    <Card
      className="w-full max-w-5xl! p-8"
    >
      <ul
        className="timeline timeline-snap-icon timeline-compact timeline-vertical w-full"
      >
        {EXPERIENCES.map((experience, index) => (
          <React.Fragment
            key={index}
          >
            <TimelineDateHeader
              experience={experience}
              t={t}
            />
            <li>
              <div
                className="timeline-middle"
              >
                <TimelineBadge
                  experience={experience}
                />
              </div>
              <ExperienceItem
                experience={experience}
                t={t}
              />
              {index < EXPERIENCES.length - 1 && (
                <hr
                  className="bg-primary"
                />
              )}
            </li>
          </React.Fragment>
        ))}
      </ul>
    </Card>
  );
};

export default ExperienceTimeline;
