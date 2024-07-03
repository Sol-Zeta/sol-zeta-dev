import { getBorder, getColor } from "@/styles/utils";
import styled from "styled-components";

interface TreeItemProps {
  color: string;
  isActive: boolean;
}

export const TreeItemWrapper = styled.div<TreeItemProps>`
  padding: 16px 24px;
  display: flex;
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
`;
