"use client";

import Link from "next/link";
import {
  usePathname,
} from "next/navigation";
import {
  ReactNode,
} from "react";

import {
  LOCALES,
} from "@/constants/locales";
import {
  useAppSelector,
} from "@/store/hooks";
import {
  Colors, Styles,
} from "@/types/theme";
import {
  getBtnColor, getBtnStyle,
} from "@/utils/theme";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  activeFor?: string[];
  dataOverlay?: string;
  color?: Colors;
  style?: Styles
}

const NavLink = ({
  href,
  children,
  activeFor,
  dataOverlay,
  color,
  style,
}: NavLinkProps) => {
  const path = usePathname();
  const hasUnsavedChanges = useAppSelector(state => state.reference.hasUnsavedChanges);

  const localePattern = new RegExp(`^/(${LOCALES.join("|")})`);
  const sanitizedPath = path.replace(localePattern, "");

  const normalizedPath = sanitizedPath || "/";

  const isActive = activeFor
    ? activeFor.includes(normalizedPath)
    : normalizedPath === href || (href !== "/" && normalizedPath.endsWith(href));

  const getNavLinkStyles = () => {
    let baseStyles = "no-underline flex items-center justify-center transition-colors duration-150";

    if (hasUnsavedChanges) {
      baseStyles = `${baseStyles} opacity-50 cursor-not-allowed`;
    } else {
      baseStyles = `${baseStyles} hover:text-primary hover:underline`;
    }

    if (isActive) {
      baseStyles = `${baseStyles} font-medium underline`;
    }

    if (style) {
      baseStyles = `${baseStyles} btn ${getBtnStyle(style)}`;
    }

    if (color) {
      baseStyles = `${baseStyles} ${getBtnColor(color)}`;
    }

    return baseStyles;
  };

  if (hasUnsavedChanges) {
    return (
      <span
        data-overlay={dataOverlay}
        className={getNavLinkStyles()}
        title="Please wait for your reference to be saved before navigating"
      >
        {children}
      </span>
    );
  }

  return (
    <Link
      data-overlay={dataOverlay}
      className={getNavLinkStyles()}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
