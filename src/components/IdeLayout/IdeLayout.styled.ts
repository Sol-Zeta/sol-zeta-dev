import { getBreakpoint, getColor } from "@/styles/utils";
import { styled } from "styled-components";

interface TabProps {
  isActive?: boolean;
}

export const LayoutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  height: 100%;
  @media (min-width: ${getBreakpoint("md")}) {
    flex-direction: row;
  }
`;

export const ContentContainer = styled.div`
  min-width: 100%;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: ${getBreakpoint("md")}) {
    flex-direction: row;
  }
`;
export const LeftContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  flex-grow: 1;
  @media (min-width: ${getBreakpoint("md")}) {
    width: 100%;
  }
`;
export const RightContainer = styled.div`
  display: none;
  width: 40%;
  height: 100%;
  @media (min-width: ${getBreakpoint("md")}) {
    display: block;
  }
`;
export const TabsContainer = styled.div`
  display: none;
  width: 100%;
  border-bottom: 1px solid ${getColor("line").primary};
  @media (min-width: ${getBreakpoint("md")}) {
    display: flex;
  }
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
