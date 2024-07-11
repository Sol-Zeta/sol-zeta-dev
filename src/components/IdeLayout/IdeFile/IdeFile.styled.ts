import { getBreakpoint, getColor } from "@/styles/utils";
import styled from "styled-components";

export const IdeFileWrapper = styled.div`
  display: flex;
  width: 100%;
  max-height: calc(100% - 140px);
  @media (min-width: ${getBreakpoint("md")}) {
    max-height: calc(100% - 40px);
  }
`;

export const ContentWrapper = styled.article`
  background-color: ${getColor("background").medium};
  padding: 24px;
  width: 100%;
  display: flex;
  color: white;
  overflow-y: scroll;
  overflow-x: hidden;
  @media (min-width: ${getBreakpoint("md")}) {
    padding: 16px 80px;
  }
`;
