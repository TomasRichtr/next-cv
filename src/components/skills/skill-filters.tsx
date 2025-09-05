import {
  filter,
  includes,
  map,
} from "lodash";
import Link from "next/link";

import SkillCheckbox from "@/components/skills/skill-checkbox";
import {
  SkillDegree,
} from "@/constants/cv";
import {
  ROUTE,
} from "@/constants/route";

interface SkillFiltersProps {
  t: (key: string) => string;
  selectedDegrees: number[];
}

const SkillFilters = ({
  t,
  selectedDegrees,
}: SkillFiltersProps) => {
  const degreeLabels = [
    t("skills.degrees.0"),
    t("skills.degrees.1"),
    t("skills.degrees.2"),
  ];

  const degreeValues = filter(Object.values(SkillDegree), (v) => typeof v === "number") as number[];

  return (
    <div
      className="mb-6"
    >
      <h5
        className="mb-4"
      >
        {t("skills.filters.degree")}
      </h5>
      <div
        className="flex w-full flex-wrap items-start gap-3 sm:flex-nowrap"
      >
        {map(degreeValues, (degree, index) => {
          const isSelected = includes(selectedDegrees, degree);
          const newSelectedDegrees = isSelected
            ? filter(selectedDegrees, (d) => d !== degree)
            : [...selectedDegrees,
              degree];

          return (
            <Link
              href={ROUTE.SKILLS(newSelectedDegrees)}
              key={degree}
            >
              <label
                className="custom-soft-option flex flex-row items-start gap-3 sm:w-1/2"
              >
                <SkillCheckbox
                  checked={isSelected}
                />
                <span
                  className="label-text w-full text-start"
                >
                  <span
                    className="flex justify-between mb-1"
                  >
                    <span
                      className="text-base font-medium"
                    >
                      {degreeLabels[index] || `Degree ${degree}`}
                    </span>
                    <span
                      className="text-base-content/50 text-base"
                    >
                      {degree === 0 ? "Junior" : degree === 1 ? "Medior" : "Senior"}
                    </span>
                  </span>
                  <span
                    className="text-base-content/80"
                  >
                    {degree === 0
                      ? "Beginner level skills"
                      : degree === 1
                        ? "Intermediate level skills"
                        : "Advanced level skills"}
                  </span>
                </span>
              </label>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SkillFilters;
