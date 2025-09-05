import ReferenceForm from "@/components/forms/reference-form";
import Card from "@/components/utils/card";
import {
  getReferenceByUserId,
} from "@/db/dao/reference";

interface ReferenceCardProps {
    userId: number;
}

const ReferenceCard = async ({
  userId,
}: ReferenceCardProps) => {
  const reference = await getReferenceByUserId(userId);

  return (
    <Card
      className="mt-10"
    >
      <ReferenceForm
        userId={userId}
        reference={reference}
      />
    </Card>
  );
};

export default ReferenceCard;
