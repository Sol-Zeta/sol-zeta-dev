import styled from "styled-components";
import { buttonPadding, getBreakpoint, getColor } from "@/styles/utils";
import { NavItemProps, NavItemRoles } from ".";

export const NavBarWrapper = styled.div`
  width: 100%;
  height: 48px;
  border-bottom: 1px solid ${getColor("line").primary};
  @media (max-width: ${getBreakpoint("md")}) {
    display: none;
  }
`;
export const MobileNavWrapper = styled.div`
  width: 100vw;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 5;
  border-top: 1px solid ${getColor("line").primary};
  background-color: ${getColor("background").medium};
  @media (min-width: ${getBreakpoint("md")}) {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (min-width: ${getBreakpoint("md")}) {
    min-width: 100%;
    justify-content: start;
  }
`;

export const NavItem = styled.li<NavItemProps>`
  ${buttonPadding}
  display: ${({ role }) => (role === NavItemRoles.MAIN ? "none" : "flex")};
  justify-content: center;
  list-style: none;
  height: 100%;
  border-right: 1px solid ${getColor("line").primary};
  position: relative;
  color: ${({ isActive }) =>
    isActive ? getColor("text").primary : getColor("secondary").gray};
  padding: 16px;
  flex: 1;

  &.internalLink svg {
    fill: ${({ isActive }) =>
      isActive ? getColor("accent").green : getColor("secondary").gray};
  }
  & > a {
    &:hover {
      color: ${getColor("text").primary};
    }
  }
  &.internalLink:before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ isActive }) => (isActive ? "100%" : "0")};
    height: 2px;
    background-color: ${getColor("accent").green};
    transition: width 0.2s ease;
  }

  &:hover:before {
    width: 100%;
  }
  @media (min-width: ${getBreakpoint("md")}) {
    display: block;
    flex-grow: 0;
    padding: 16px 32px;
    min-width: ${({ role }) => role === NavItemRoles.MAIN && "300px"};
    & > a {
      &:before {
        bottom: 0;
        top: unset;
      }
    }
    &:last-child {
      margin-left: auto;
      border-right: none;
      border-left: 1px solid ${getColor("line").primary};
    }
  }
`;
