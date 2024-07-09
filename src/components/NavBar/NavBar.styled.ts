import styled from "styled-components";
import { buttonPadding, getColor } from "@/styles/utils";
import { NavItemProps, NavItemRoles } from ".";

export const NavBarWrapper = styled.div`
  width: 100%;
  height: 48px;
  border-bottom: 1px solid ${getColor("line").primary};
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 100%;
`;

export const NavItem = styled.li<NavItemProps>`
  ${buttonPadding}
  list-style: none;
  height: 100%;
  min-width: ${({ role }) => role === NavItemRoles.MAIN && "300px"};
  border-right: 1px solid ${getColor("line").primary};
  position: relative;
  color: ${({ isActive }) =>
    isActive ? getColor("text").primary : getColor("secondary").gray};

&:last-child {
  margin-left: auto;
  border-right: none;
  border-left: 1px solid ${getColor("line").primary};
}
  & > a {

    &:hover {
      color: ${getColor("text").primary};
    }

    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: ${({ isActive }) => (isActive ? "100%" : "0")};
      height: 2px;
      background-color: ${getColor("accent").orange};
      transition: width 0.2s ease;
    }

    &:hover:before {
      width: 100%;
    }
  }
`;
