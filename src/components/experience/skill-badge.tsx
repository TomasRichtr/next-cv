import React from "react";

import "devicon/devicon.min.css";
import WithSkeleton from "@/components/layout/with-skeleton";
import {
  DEV_ICONS_MAP,
} from "@/constants/cv";

interface SkillBadgeProps {
  skill: string;
}

const SkillBadge = ({
  skill,
}: SkillBadgeProps) => {
  const iconClass = `${DEV_ICONS_MAP[skill]} text-xl text-primary`;

  return (
    <div
      className="tooltip"
    >
      <span
        className="badge badge-primary px-3 py-4 badge-outline flex items-center gap-1 tooltip-toggle"
        aria-label={`Tooltip for ${skill}`}
      >
        <i
          className={iconClass}
        />
        <span
          className="hidden lg:inline capitalize"
        >
          {skill}
        </span>
      </span>
      <WithSkeleton>
        <span
          className="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible lg:hidden"
          role="tooltip"
        >
          <span
            className="tooltip-body capitalize"
          >
            {skill}
          </span>
        </span>
      </WithSkeleton>
    </div>
  );
};

export default SkillBadge;
