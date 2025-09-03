import ReferenceForm from "@/components/forms/reference-form";
import Card from "@/components/utils/card";
import {
  getReferenceByUserId,
} from "@/db/dao/reference";

interface ReferenceCardProps {
    userId: number;
}

const ReferenceCard = ({
  userId,
}: ReferenceCardProps) => {
  const reference = getReferenceByUserId(userId);

  return (
    <Card
      className="mt-10 max-w-3xl"
    >
      <ReferenceForm
        className="w-full"
        userId={userId}
        reference={reference}
      />
    </Card>
  );
};

export default ReferenceCard;
