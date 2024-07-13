import styled from "styled-components";
import { getBreakpoint, getColor } from "@/styles/utils";
import { NavItemProps, NavItemRoles } from ".";
import Link from "next/link";

export const NavBarWrapper = styled.div`
  display: none;
  width: 100%;
  height: 48px;
  border-bottom: 1px solid ${getColor("line").primary};
  @media (min-width: ${getBreakpoint("md")}) {
    display: block;
    position: relative;
    z-index: 10;
  }
`;

export const MobileNavWrapper = styled.div`
  width: 100vw;
  position: relative;
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
  display: ${({ role }) => (role === NavItemRoles.MAIN ? "none" : "flex")};
  justify-content: center;
  list-style: none;
  border-right: 1px solid ${getColor("line").primary};
  position: relative;
  color: ${({ isActive }) =>
    isActive ? getColor("text").primary : getColor("secondary").gray};
  flex: 1;
  cursor: pointer;

  &.internalLink svg {
    fill: ${({ isActive }) =>
      isActive ? getColor("secondary").green : getColor("secondary").gray};
  }
  &.internalLink:before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ isActive }) => (isActive ? "100%" : "0")};
    height: 2px;
    background-color: ${getColor("secondary").green};
    transition: width 0.2s ease;
  }
  @media (min-width: ${getBreakpoint("md")}) {
    display: flex;
    flex-grow: 0;
    min-width: ${({ role }) => role === NavItemRoles.MAIN && "300px"};
    color: ${({ role }) =>
      role === NavItemRoles.MAIN && `${getColor("secondary").green}`};
    & > a {
      &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: ${({ isActive }) => (isActive ? "100%" : "0")};
        height: 2px;
        background-color: ${getColor("secondary").green};
        transition: width 0.2s ease;
      }
    }
    &:hover {
      background-color: ${getColor("background").lighter};
    }
    &:hover:before {
      width: 100%;
    }
    &:last-child {
      margin-left: auto;
      border-right: none;
      border-left: 1px solid ${getColor("line").primary};
    }
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  padding: 24px;
  &:focus {
    outline: none;
  }
  @media (min-width: ${getBreakpoint("md")}) {
    display: block;
    flex-grow: 0;
    padding: 16px 32px;
  }
`;
