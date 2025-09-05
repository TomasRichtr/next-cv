"use client";

import WithSkeleton from "@/components/layout/with-skeleton";

interface SkillCheckboxProps {
    checked: boolean;
}

const SkillCheckbox = ({
  checked,
}: SkillCheckboxProps) => {
  return (
    <WithSkeleton
      heightClass="h-8"
      widthClass="w-8"
    >
      <input
        type="checkbox"
        className="checkbox checkbox-primary mt-2"
        checked={checked}
        readOnly
      />
    </WithSkeleton>
  );
};

export default SkillCheckbox;
