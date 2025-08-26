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

interface NavLinkProps {
  href: string;
  children: ReactNode;
  activeFor?: string[];
}

const NavLink = ({
  href,
  children,
  activeFor,
}: NavLinkProps) => {
  const path = usePathname();

  const localePattern = new RegExp(`^/(${LOCALES.join("|")})`);
  const sanitizedPath = path.replace(localePattern, "");

  const normalizedPath = sanitizedPath || "/";

  const isActive = activeFor
    ? activeFor.includes(normalizedPath)
    : normalizedPath === href || (href !== "/" && normalizedPath.endsWith(href));

  return (
    <Link
      className={`inline-block px-3 py-2 text-secondary-700 no-underline transition-colors duration-150 hover:text-primary-600 hover:underline ${
        isActive ? "text-primary-700 font-medium underline" : ""
      }`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
