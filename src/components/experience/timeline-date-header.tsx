import dayjs from "dayjs";

import {
  Experience,
} from "@/constants/cv";

interface TimelineDateHeaderProps {
  experience: Experience;
  t: (key: string) => string;
}

const TimelineDateHeader = ({
  experience,
  t,
}: TimelineDateHeaderProps) => {
  const formatDateRange = (experience: Experience) => {
    const start = experience.startDate.format("MMM YYYY");
    const end = experience.endDate ? experience.endDate.format("MMM YYYY") : t("experience.present");

    const startMoment = experience.startDate;
    const endMoment = experience.endDate || dayjs();
    const months = endMoment.diff(startMoment, "month");
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    let duration = "";
    if (years > 0) {
      duration = `${years} year${years > 1 ? "s" : ""}`;
      if (remainingMonths > 0) {
        duration += ` ${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`;
      }
    } else {
      duration = `${months} month${months > 1 ? "s" : ""}`;
    }

    return `${start} - ${end} (${duration})`;
  };

  return (
    <span
      className="text-sm text-base-content/70 mt-2 first:mt-0"
    >
      {formatDateRange(experience)}
    </span>
  );
};

export default TimelineDateHeader;
