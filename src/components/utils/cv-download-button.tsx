"use client";

import WithSkeleton from "@/components/layout/with-skeleton";
import {
  getAWSUrl,
} from "@/utils/file";

interface CvDownloadButtonProps {
  className?: string;
}

export const CvDownloadButton = ({
  className = "",
}: CvDownloadButtonProps) => {
  return (
    <WithSkeleton
      widthClass="w-20"
    >
      <a
        href={getAWSUrl("cv-tomas-richtr.pdf")}
        download="CV-Tomas-Richtr.pdf"
        className={`btn btn-accent shadow-lg rounded-lg flex items-center gap-2 transition-transform duration-200 hover:scale-105 ${className}`}
        target="_blank"
      >
        <span>
          CV
        </span>
        <span
          className="icon-[tabler--download] size-6"
        />
      </a>
    </WithSkeleton>
  );
};

export default CvDownloadButton;
