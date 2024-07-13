import { getBreakpoint, getColor } from "@/styles/utils";
import styled from "styled-components";

export const IdeFileWrapper = styled.div`
  display: flex;
  padding: 24px;
  width: 100%;
  @media (min-width: ${getBreakpoint("md")}) {
    max-height: calc(100% - 50px);
    padding: 16px 80px;
  }
`;
