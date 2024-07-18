import React, { FC } from "react";
import {
  HomeItem,
  NavBarWrapper,
  NavItem,
  NavLink,
  NavList,
  MobileNavWrapper,
} from "./NavBar.styled";
import { useRouter } from "next/router";
import Icon, { Icons } from "../Icon";
import { NAV_SECTIONS, NavItemRoles } from "@/utils/global";

export interface NavItemProps {
  children: React.ReactNode;
  role?: keyof typeof NavItemRoles | undefined;
  isActive: boolean;
}

export const MobileNavBar: FC = () => {
  const router = useRouter();
  return (
    <MobileNavWrapper data-testid="NavBar">
      <NavList>
        {NAV_SECTIONS.filter((section) => !section.top).map(
          ({ title, role, href, icon }) => {
            const isActive =
              router.pathname.split("/")[1] === href?.split("/")[1];
            const isExternalLink = !(href?.split("")[0] === "/");

            return (
              <NavItem
                key={title}
                className={`${isExternalLink ? "" : "internalLink"} ${
                  isActive ? "isActive" : ""
                } ${role === NavItemRoles.MAIN ? "isMain" : ""}`}
              >
                {href ? (
                  <NavLink
                    href={href}
                    target={isExternalLink ? "_blank" : "_self"}
                  >
                    <Icon icon={icon} isButton={false} />
                  </NavLink>
                ) : null}
              </NavItem>
            );
          }
        )}
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
          <HomeItem onClick={() => router.push("/")} key={"soledad-pattoglio"}>
            soledad-pattoglio
          </HomeItem>
          {NAV_SECTIONS.map(({ title, role, href, desktop }) => {
            if (desktop === false) return null;
            const isActive =
              router.pathname.split("/")[1] === href?.split("/")[1];
            return (
              <NavItem
                onClick={() => router.push(href || "")}
                key={title}
                role={role}
                className={`${isActive ? "isActive" : ""} ${
                  role === NavItemRoles.MAIN ? "isMain" : ""
                }`}
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
