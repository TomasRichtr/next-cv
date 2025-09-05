import StarRating from "./star-rating";

interface SkillCardProps {
  name: string;
  icon: string;
  degree: number;
}

const SkillCard = ({
  name,
  icon,
  degree,
}: SkillCardProps) => (
  <div
    className={`
      flex flex-col items-center p-7 bg-base-200 rounded-xl
      hover:bg-base-300 transition-all duration-200 hover:scale-125 hover:shadow-lg
    `}
  >
    <i
      className={`${icon} text-5xl mb-3 text-primary`}
    />
    <span
      className="font-semibold text-left text-base-content mb-2 capitalize"
    >
      {name}
    </span>
    <StarRating
      degree={degree}
    />
  </div>
);

export default SkillCard;
