"use client";

import Link from "next/link";
import {
  usePathname,
} from "next/navigation";
import {
  ReactNode,
} from "react";

import classes from "../../../../food-menu/src/components/layout/mainHeader/mainHeader.module.css";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const NavLink = ({
  href,
  children,
}: NavLinkProps) => {
  const path = usePathname();

  return (
    <Link
      className={path.startsWith(href) ? `${classes.link} ${classes.active}` : classes.link}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
