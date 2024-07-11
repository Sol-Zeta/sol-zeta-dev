import { getBorder, getBreakpoint, getColor } from "@/styles/utils";
import styled from "styled-components";

interface TreeItemProps {
  color: string;
  isActive: boolean;
}

export const TreeItemWrapper = styled.div<TreeItemProps>`
  display: flex;
  padding: 0 16px 16px;
  gap: 16px;
  cursor: pointer;
  color: ${({ isActive }) =>
    isActive ? getColor("secondary").white : getColor("secondary").gray};
  .itemIcon {
    svg {
      fill: ${({ color }) => color};
      filter: ${({ isActive }) => `saturate(${isActive ? 1 : "30%"})`};
    }
  }
  @media (min-width: ${getBreakpoint("md")}) {
    height: 100%;
    padding: 16px 24px;
  }
`;
