import {
  Experience,
} from "@/constants/cv";

interface TimelineBadgeProps {
  experience: Experience;
}

const TimelineBadge = ({
  experience,
}: TimelineBadgeProps) => {
  const getBadgeClasses = (experience: Experience) => {
    return experience.endDate
      ? "badge badge-primary size-4.5 rounded-full p-0"
      : "bg-secondary/20 flex size-4.5 items-center justify-center rounded-full";
  };

  const getIcon = (experience: Experience) => {
    if (experience.endDate) {
      return (
        <span
          className="icon-[tabler--check] text-primary-content size-3.5"
        />
      );
    } else {
      return (
        <span
          className="badge badge-secondary size-3 rounded-full p-0"
        />
      );
    }
  };

  return (
    <span
      className={getBadgeClasses(experience)}
    >
      {getIcon(experience)}
    </span>
  );
};

export default TimelineBadge;
