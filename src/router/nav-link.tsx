"use client";

import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps extends LinkProps {
  activeClassName?: string;
  className?: string;
  children: ReactNode;
}

const NavLink = (props: NavLinkProps) => {
  const { activeClassName = "active", href, className, ...others } = props;
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(isActive ? activeClassName : "", className)}
      {...others}
    />
  );
};

export default NavLink;
