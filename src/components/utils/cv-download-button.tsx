"use client";

import WithSkeleton from "@/components/layout/with-skeleton";

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
        href="https://docs.google.com/document/d/1jRGmHYF0PjFB-f_qe_xoX6RIKeB5Qz2HX8lCZqnvddk/edit?usp=sharing"
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
