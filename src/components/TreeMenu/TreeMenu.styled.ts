import styled from "styled-components";
import { borderTheme, getBorder, getBreakpoint, getColor, getFontSize } from "@/styles/utils";

interface TreeMenuSection {
  isOpen: boolean;
}

export const TreeMenuWrapper = styled.div`
  ${borderTheme}
  border-top: none;
  border-left: none;
  @media (min-width: ${getBreakpoint("md")}) {
    height: 100%;
  }
`;

export const TreeMenuSection = styled.div<TreeMenuSection>`
  display: flex;
  flex-direction: column;
  width: 350px;
  gap: 16px;
  height: calc(100% - 20px);
  cursor: pointer;
  color: ${({ isOpen }) =>
    isOpen ? getColor("secondary").white : getColor("secondary").gray};
  .chevron svg{
    transform: ${({ isOpen }) => `rotate(${isOpen ? -180 : 0}deg)`};
    fill: ${({ isOpen }) =>
      isOpen ? getColor("secondary").white : getColor("secondary").gray};
    transition: transform 0.3s ease;
  }
`;

export const TreeMenuHeader = styled.div`
  padding: 16px 24px;
  display: flex;
  gap: 16px;
  border-bottom: ${getBorder()};
`;
export const TreeMenuBody = styled.div`
    // border-bottom: ${getBorder()};
    /* max-height: calc(100vh - 268px); */
    overflow-y: hidden;
`;
