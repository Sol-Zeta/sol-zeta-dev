import styled from "styled-components";
import {
  flexTheme,
  borderTheme,
  getBreakpoint,
  getColor,
  getTheme,
} from "@/styles/utils";

const background = getColor("background");

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
  @media (min-width: ${getBreakpoint("md")}) {
    width: 95%;
    height: 90vh;
    border-radius: ${getTheme("borderRadius", "md")};
  }
`;
export const PageWrapper = styled.div`
  width: 100%;
  height: calc(100% - 108px);
  display: flex;
  align-items: start;
`;
