import {
  range,
} from "lodash";

interface StarRatingProps {
  degree: number;
}

const StarRating = ({
  degree,
}: StarRatingProps) => (
  <div
    className="flex"
  >
    {range(3).map(i => (
      <i
        key={i}
        className={
          `size-5 ${
            i < degree + 1
              ? "icon-[tabler--star-filled] text-yellow-500"
              : "icon-[tabler--star] text-gray-400"
          }`

        }
      />
    ))}
  </div>
);

export default StarRating;
