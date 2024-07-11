import styled from "styled-components";
import { device } from "@/utils/device";

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
  padding: 64px;
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
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  background-color: ${background.medium};
  justify-self: center;
  overflow: hidden;
  width: 95%;
  border-radius: ${getTheme("borderRadius", "md")};
  @media (min-width: ${getBreakpoint("md")}) {

  }
`;

export const PageWrapper = styled.div`
  width: 100%;
  min-height: calc(100% - 112px);
  display: flex;
  align-items: start;
`;
