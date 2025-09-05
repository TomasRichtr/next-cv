"use client";

import {
  useParams, usePathname, useRouter,
} from "next/navigation";
import {
  useEffect, useState,
} from "react";
import {
  useTranslation,
} from "react-i18next";

import CvDownloadButton from "@/components/utils/cv-download-button";
import {
  ROUTE,
} from "@/constants/route";

export const CvButtons = () => {
  const {
    t,
  } = useTranslation();

  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();
  const [isAtBottom, setIsAtBottom] = useState(false);

  const locale = params.locale as string;
  const pathWithoutLocale = locale ? pathname.replace(`/${locale}`, "") || "/" : pathname;

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const fromBottomOffset = 25;
      const isAtBottom = windowHeight + scrollTop >= documentHeight - fromBottomOffset;
      setIsAtBottom(isAtBottom);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getNextRoute = () => {
    switch (pathWithoutLocale) {
    case ROUTE.HOME:
      return {
        route: ROUTE.ABOUT,
        label: t("navigation.about"),
      };
    case ROUTE.ABOUT:
      return {
        route: ROUTE.EXPERIENCE,
        label: t("navigation.experience"),
      };
    case ROUTE.EXPERIENCE:
      return {
        route: ROUTE.SKILLS,
        label: t("navigation.skills"),
      };
    case ROUTE.SKILLS:
      return {
        route: ROUTE.CONTACT,
        label: t("navigation.contact"),
      };
    default:
      return null;
    }
  };

  const getPreviousRoute = () => {
    switch (pathWithoutLocale) {
    case ROUTE.ABOUT:
      return {
        route: ROUTE.HOME,
        label: t("navigation.home"),
      };
    case ROUTE.EXPERIENCE:
      return {
        route: ROUTE.ABOUT,
        label: t("navigation.about"),
      };
    case ROUTE.SKILLS:
      return {
        route: ROUTE.EXPERIENCE,
        label: t("navigation.experience"),
      };
    case ROUTE.CONTACT:
      return {
        route: ROUTE.SKILLS,
        label: t("navigation.skills"),
      };
    default:
      return null;
    }
  };

  const nextRoute = getNextRoute();
  const previousRoute = getPreviousRoute();

  if (!nextRoute && !previousRoute) {
    return null;
  }

  const handleNextClick = () => {
    if (nextRoute) {
      router.push(nextRoute.route);
    }
  };

  const handlePreviousClick = () => {
    if (previousRoute) {
      router.push(previousRoute.route);
    }
  };

  return (
    <div
      className={`intersect:motion-delay-[3000ms] intersect:motion-preset-bounce fixed right-4 z-50 flex gap-2 transition-all duration-300 ease-in-out ${
        isAtBottom ? "bottom-16" : "bottom-4"
      }`}
    >
      {previousRoute && (
      <button
        onClick={handlePreviousClick}
        className="btn btn-secondary shadow-lg rounded-lg flex items-center gap-2 w-14 transition-transform duration-200 hover:scale-105"
      >
        <span
          className="icon-[tabler--arrow-left] size-6"
        />
      </button>
      )}

      <CvDownloadButton />

      {nextRoute && (
        <button
          onClick={handleNextClick}
          className="btn btn-primary shadow-lg rounded-lg flex items-center gap-2 transition-transform duration-200 hover:scale-105"
        >
          {nextRoute.label}
          <span
            className="icon-[tabler--arrow-right] size-6"
          />
        </button>
      )}
    </div>
  );
};

export default CvButtons;
