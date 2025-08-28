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

  const localePattern = new RegExp(`^/(${LOCALES.join("|")})`);
  const sanitizedPath = path.replace(localePattern, "");

  const normalizedPath = sanitizedPath || "/";

  const isActive = activeFor
    ? activeFor.includes(normalizedPath)
    : normalizedPath === href || (href !== "/" && normalizedPath.endsWith(href));

  const getNavLinkStyles = () => {
    let baseStyles = "no-underline flex items-center justify-center transition-colors duration-150 hover:text-primary hover:underline";

    if (isActive) {
      baseStyles = `${baseStyles} text-primary font-medium underline`;
    } else {
      baseStyles = `${baseStyles} text-secondary`;
    }

    if (style) {
      baseStyles = `${baseStyles} btn ${getBtnStyle(style)}`;
    }

    if (color) {
      baseStyles = `${baseStyles} ${getBtnColor(color)}`;
    }

    return baseStyles;
  };

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
