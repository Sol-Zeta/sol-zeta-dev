import React, { FC, useState } from "react";
import { NavBarWrapper, NavItem, NavList } from "./NavBar.styled";
import Link from "next/link";
import { useRouter } from "next/router";
import path from "path";

interface NavBarProps {}

export interface NavItemProps {
  children: React.ReactNode;
  role?: keyof typeof NavItemRoles | undefined;
  isActive: boolean;
}

export enum NavItemRoles {
  MAIN = "MAIN",
  LAST = "LAST",
}

const NAV_SECTIONS = [
  {
    title: "soledad-pattoglio",
    role: NavItemRoles.MAIN,
  },
  {
    title: "_hello",
    href: "/",
  },
  {
    title: "_about",
    href: "/about",
  },
  {
    title: "_projects",
    href: "/projects",
  },
  {
    title: "_contact",
    role: NavItemRoles.LAST,
    href: "/contact",
  },
];

const NavBar: FC<NavBarProps> = () => {
  const router = useRouter();
  return (
    <NavBarWrapper data-testid="NavBar">
      <NavList>
        {NAV_SECTIONS.map(({ title, role, href }) => (
          <NavItem
            key={title}
            role={role}
            isActive={router.pathname.split("/")[1] === href?.split("/")[1]}
          >
            {href ? <Link href={href}>{title}</Link> : <>{title}</>}
          </NavItem>
        ))}
      </NavList>
    </NavBarWrapper>
  );
};

export default NavBar;
