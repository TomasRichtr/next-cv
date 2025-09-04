import {
  Experience,
} from "@/constants/cv";

interface SkillsBadgeListProps {
  skills: Experience["skills"];
}

const SkillsBadgeList = ({
  skills,
}: SkillsBadgeListProps) => {
  return (
    <div
      className="flex flex-wrap gap-2"
    >
      {skills.slice(0, 6).map((skill, skillIndex) => (
        <span
          key={skillIndex}
          className="badge badge-soft badge-secondary text-xs"
        >
          {skill}
        </span>
      ))}
      {skills.length > 6 && (
        <span
          className="badge badge-soft badge-neutral text-xs"
        >
          +
          {skills.length - 6}
          {" "}
          more
        </span>
      )}
    </div>
  );
};

export default SkillsBadgeList;
