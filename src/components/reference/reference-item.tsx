import Card from "@/components/utils/card";
import {
  formatDate,
} from "@/components/utils/datetime";
import {
  ReferenceWithUser,
} from "@/types/reference";

interface ReferenceItemProps {
  reference: ReferenceWithUser;
  gridData?: {
    rotation: number;
  };
  userId?: number
}

const ReferenceItem = ({
  reference,
  gridData,
  userId,
}: ReferenceItemProps) => {
  const style = gridData ? {
    transform: `rotate(${gridData.rotation}deg)`,
  } : {};

  const isOwnReference = userId === reference.user_id;
  const ringColor = isOwnReference ? "ring-success hover:shadow-success" : "ring-primary hover:shadow-primary";

  return (
    <Card
      className={`
        ring ${ringColor} shadow hover:shadow-lg
        hover:scale-110 md:hover:scale-150 xl:hover:scale-200 hover:z-50 transition-all duration-300 animate-fade-in
      `}
      style={style}
    >
      <div
        className="space-y-3"
      >
        <div
          className="text-sm"
        >
          <div
            className="font-medium text-primary"
          >
            {reference.email}
          </div>
          <div
            className="text-secondary text-xs mt-1"
          >
            {formatDate(reference.date)}
          </div>
        </div>
        <blockquote
          className="text-secondary-600 italic text-sm leading-relaxed"
        >
          &#34;
          {reference.reference}
          &#34;
        </blockquote>
      </div>
    </Card>
  );
};

export default ReferenceItem;
