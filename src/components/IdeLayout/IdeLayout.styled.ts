import { getColor } from "@/styles/utils";
import { styled } from "styled-components";

interface TabProps {
  isActive?: boolean;
}

export const LayoutWrapper = styled.section`
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 100%;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
export const LeftContainer = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
`;
export const RightContainer = styled.div`
  width: 50%;
  height: 100%;
  background-color: blue;
`;
export const TabsContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const FileTab = styled.div<TabProps>`
  border-right: 1px solid ${getColor("line").primary};
  width: 210px;
  padding: 8px 8px 8px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: ${({ isActive }) =>
    isActive ? getColor("secondary").white : getColor("secondary").gray};
`;
