import { getBreakpoint, getColor } from "@/styles/utils";
import styled from "styled-components";

export const IdeFileWrapper = styled.div`
  display: flex;
  padding: 24px;
  @media (min-width: ${getBreakpoint("md")}) {
    width: calc(100% - 350px);
    max-height: calc(100% - 50px);
    padding: 16px 80px;
    overflow-y: scroll;
  }
`;
