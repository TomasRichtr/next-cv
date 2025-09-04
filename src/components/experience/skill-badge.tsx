import React from "react";

import "devicon/devicon.min.css";
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
          className="hidden lg:inline"
        >
          {skill}
        </span>
      </span>
      <span
        className="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible lg:hidden"
        role="tooltip"
      >
        <span
          className="tooltip-body"
        >
          {skill}
        </span>
      </span>
    </div>
  );
};

export default SkillBadge;
