import AnimateItem from "@/components/animators/animate-item";
import ReferenceItem from "@/components/reference/reference-item";
import {
  verifyAuthSession,
} from "@/db/auth";
import {
  getReferencesWithUsers,
} from "@/db/dao/reference";

const ReferenceList = async () => {
  const references = getReferencesWithUsers();

  const generateGridData = () => {
    return references.map(() => ({
      rotation: Math.random() * 20 - 10,
    }));
  };

  const gridData = generateGridData();

  const {
    user,
  } = await verifyAuthSession();

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-10 md:gap-16 xl:gap-20 p-8 min-h-screen"
    >
      {references.map((r, i) => {
        return (
          <AnimateItem
            i={i}
            key={r.id}
          >
            <ReferenceItem
              reference={r}
              gridData={gridData[i]}
              userId={user ? +user?.id : undefined}
            />
          </AnimateItem>
        );
      })}
    </div>
  );
};

export default ReferenceList;
