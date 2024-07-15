import styled from "styled-components";
import { getBreakpoint, getColor } from "@/styles/utils";
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
  max-height: 64px;
  position: relative;
  bottom: 0;
  right: 0;
  z-index: 100;
  border-top: 1px solid ${getColor("line").primary};
  background-color: ${getColor("background").medium};
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 150px; /* Ajusta esta altura según sea necesario */
    -webkit-box-shadow: 0px 8px 11px 12px rgba(67, 217, 173, 0.42);
    -moz-box-shadow: 0px 8px 11px 12px rgba(67, 217, 173, 0.42);
    box-shadow: 0px 8px 11px 12px rgba(67, 217, 173, 0.42);
    z-index: -1;
  }
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
export const HomeItem = styled.li`
  width: 100%;
  height: 100%;
  max-width: 250px;
  text-align: center;
  color: ${getColor("secondary").green};
  border-right: 1px solid ${getColor("line").primary};
  padding: 16px 32px;
  cursor: pointer;
  &:hover {
    background-color: ${getColor("background").lighter};
  }
`;
export const NavItem = styled.li`
  display: flex;
  justify-content: center;
  list-style: none;
  /* border-right: 1px solid ${getColor("line").primary}; */
  position: relative;
  color: ${getColor("secondary").gray};
  &.isActive {
    color: ${getColor("text").primary};
  }
  &.isMain {
    display: none;
  }
  flex: 1;
  cursor: pointer;

  &.internalLink svg {
    fill: ${getColor("secondary").gray};
  }
  &.internalLink.isActive svg {
    fill: ${getColor("secondary").green};
  }
  /* &.internalLink::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: ${getColor("secondary").green};
    transition: width 0.2s ease;
  }
  &.internalLink.isActive::before {
    width: 100%;
  } */
  @media (min-width: ${getBreakpoint("md")}) {
    display: flex;
    flex-grow: 0;
    & > a {
      &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 2px;
        background-color: ${getColor("secondary").green};
        transition: width 0.2s ease;
      }
    }
    &.isActive > a {
      &::before {
        width: 100%;
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
  padding: 16px 0 35px 0;
  &:focus {
    outline: none;
  }
  @media (min-width: ${getBreakpoint("md")}) {
    display: block;
    flex-grow: 0;
    padding: 16px 32px;
  }
`;
