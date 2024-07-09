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
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  display: flex;
`;
export const LeftContainer = styled.div`
  position: relative;
  width: 50%;
  max-width: calc(100% - 350px);
  height: 100%;
  flex-grow: 1;
`;
export const RightContainer = styled.div`
  width: 40%;
  height: 100%;
`;
export const TabsContainer = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${getColor("line").primary};
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
