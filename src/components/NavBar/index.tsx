import React, { FC } from "react";
import {
  NavBarWrapper,
  NavItem,
  NavLink,
  NavList,
  MobileNavWrapper,
} from "./NavBar.styled";
import Link from "next/link";
import { useRouter } from "next/router";
import Icon, { Icons } from "../Icon";

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
    icon: Icons.HOME,
  },
  {
    title: "_about",
    href: "/about",
    icon: Icons.ABOUT,
  },
  // {
  //   title: "_projects",
  //   href: "/projects",
  // },
  {
    title: "_contact",
    role: NavItemRoles.LAST,
    href: "/contact",
    icon: Icons.CONTACT,
  },
  {
    title: "github",
    desktop: false,
    href: "https://github.com/Sol-Zeta",
    icon: Icons.GITHUB,
  },
  {
    title: "linkedin",
    desktop: false,
    href: "https://www.linkedin.com/in/mspattoglio/",
    icon: Icons.LINKEDIN,
  },
];

export const MobileNavBar: FC = () => {
  const router = useRouter();
  return (
    <MobileNavWrapper data-testid="NavBar">
      <NavList>
        {NAV_SECTIONS.map(({ title, role, href, icon }) => {
          const isActive = (router.pathname.split("/")[1] === href?.split("/")[1])
          const isExternalLink = !(href?.split("")[0] === "/");

          return (
            <NavItem
              key={title}
              role={role}
              isActive={isActive}
              className={isExternalLink ? '' : 'internalLink'}
            >
              {href ? (
                <NavLink href={href} target={isExternalLink ? "_blank" : "_self"}>
                  <Icon icon={icon} isButton={false}/>
                </NavLink>
              ) : null}
            </NavItem>
          );
        })}
      </NavList>
    </MobileNavWrapper>
  );
};

const NavBar: FC = () => {
  const router = useRouter();
  return (
    <>
      <NavBarWrapper data-testid="NavBar">
        <NavList>
          {NAV_SECTIONS.map(({ title, role, href, desktop }) => {
            if (desktop === false) return null;
            return (
              <NavItem
                onClick={()=> router.push(href || '')}
                key={title}
                role={role}
                isActive={router.pathname.split("/")[1] === href?.split("/")[1]}
              >
                {href ? <NavLink href={href}>{title}</NavLink> : <>{title}</>}
              </NavItem>
            );
          })}
        </NavList>
      </NavBarWrapper>
    </>
  );
};

export default NavBar;
