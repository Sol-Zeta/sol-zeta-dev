import styled from "styled-components";

import {
  flexTheme,
  borderTheme,
  getBreakpoint,
  getColor,
  getTheme,
} from "@/styles/utils";

const background = getColor("background");

export const LayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0;
  overflow: hidden;
  @media (min-width: ${getBreakpoint("md")}) {
    padding: 64px;
  }
`;

export const NonDesktopMessage = styled.div`
  display: none;
  @media (max-width: ${getBreakpoint("md")}) {
    display: block;
  }
`;

export const LayoutWrapper = styled.div`
  ${flexTheme};
  ${borderTheme};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  background-color: ${background.medium};
  border-radius: ${getTheme("borderRadius", "md")};
  @media (min-width: ${getBreakpoint("md")}) {
    overflow: hidden;
    width: 95%;
  }
`;

export const MobileHeader = styled.div`
  ${borderTheme}
  padding: 16px 24px;
  width: 100%;
  background-color: ${getColor('background').medium};
  color: ${getColor('secondary').green};
  @media (min-width: ${getBreakpoint("md")}) {
    display: none;
  }
`;

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: calc(100% - 124px);
  overflow-y: scroll;
  /* overflow-x: hidden; */
  @media (min-width: ${getBreakpoint("md")}) {
    min-height: calc(100% - 112px);
    max-height: unset;
  }
`;
