"use client";

import {
  ReactNode, useEffect, useState,
} from "react";

const WithSkeleton = ({
  children, widthClass = "w-28", heightClass = "h-10",
}: {
    children: ReactNode,
    widthClass?: string,
    heightClass?: string,
}) => {
  const [
    isHydrated, setIsHydrated,
  ] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <>
      {isHydrated && children}
      {!isHydrated && (
      <div
        className={`skeleton skeleton-animated ${widthClass} ${heightClass}`}
      />
      )}
    </>
  );
};

export default WithSkeleton;
