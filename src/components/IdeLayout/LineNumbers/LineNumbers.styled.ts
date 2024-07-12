import styled from "styled-components";
import { getBreakpoint, getColor } from "@/styles/utils";

export const LineNumbersWrapper = styled.div`
  display: none;
  color: ${getColor("secondary").gray};
  position: absolute;
  top: 80px;
  left: 30px;
  @media (min-width: ${getBreakpoint("md")}) {
    display: block;
  }
`;

export const LineNumber = styled.p`
  margin: 0;
`;
