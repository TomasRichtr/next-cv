import {
  ReactNode,
} from "react";

import Card from "@/components/utils/card";
import NavLink from "@/components/utils/nav-link";
import {
  ROUTE,
} from "@/constants/route";
import {
  ReferenceWithUser,
} from "@/types/reference";
import {
  formatDate,
} from "@/utils/datetime";

interface ReferenceItemProps {
  reference: ReferenceWithUser;
  gridData?: {
    rotation: number;
  };
  userId?: number;
  className?: string;
  isLink?: boolean;
}

const Wrapper = ({
  children,
  isLink = true,
  className,
  referenceId,
}: {
  children: ReactNode,
  isLink?: boolean,
  className?: string,
  referenceId: number
}) => {
  return (
    <>
      {isLink && (
        <NavLink
          className={`relative cursor-pointer ${className}`}
          href={ROUTE.REFERENCE_DETAIL(referenceId)}
        >
          {children}
        </NavLink>
      )}
      {!isLink && (
        <div
          className={`relative ${className}`}
        >
          {children}
        </div>
      )}
    </>
  );
};

const ReferenceItem = ({
  reference,
  gridData,
  userId,
  className,
  isLink = true,
}: ReferenceItemProps) => {
  const style = gridData ? {
    transform: `rotate(${gridData.rotation}deg)`,
  } : {};

  const isOwnReference = userId === reference.user_id;
  const ringColor = isOwnReference ? "ring-success hover:shadow-success" : "ring-primary hover:shadow-primary";

  return (
    <Wrapper
      referenceId={reference.id}
      isLink={isLink}
      className={className}
    >
      <Card
        className={`
        ring ${ringColor} shadow hover:shadow-lg
        transition-all duration-300 animate-fade-in ${isLink ? "hover:scale-120" : ""}
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
            className="relative p-4"
          >
            <span
              className="icon-[tabler--quote] text-primary-content absolute -start-3 -top-3 size-16 rotate-180 rtl:rotate-0"
            />
            <div
              className="relative z-1"
            >
              <p
                className={`text-base-content text-lg ${isLink ? "line-clamp-6": ""}`}
              >
                <em>
                  {reference.reference}
                </em>
              </p>
            </div>
            <footer
              className="mt-4"
            >
              <div
                className="text-base-content/50 text-base font-semibold"
              >
                ~
                {reference.email}
              </div>
            </footer>
          </blockquote>
        </div>
      </Card>
    </Wrapper>
  );
};

export default ReferenceItem;
