import { getBreakpoint } from "@/styles/utils";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: pink;
`;

export const GistListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  position: relative;
  z-index: 5;
  overflow: hidden;
  opacity: 0;
  transition: opacity 1s;
  &.fadeIn {
    opacity: 1;
  }
  &:hover {
    width: 100%;
    overflow-y: scroll;
  }
  @media (min-width: ${getBreakpoint("md")}) {
    width: calc(100% - 20px);
  }
`;
