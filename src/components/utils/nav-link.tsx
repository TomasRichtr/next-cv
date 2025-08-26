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

import classes from "./nav-link.module.css";

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
      className={isActive ? `${classes.link} ${classes.active}` : classes.link}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
