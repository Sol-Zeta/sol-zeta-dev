import styled from "styled-components";
import { getColor } from "@/styles/utils";

export const LineNumbersWrapper = styled.div`
  color: ${getColor("secondary").gray};
  position: relative;
  top: 24px;
  left: -30px;
`;

export const LineNumber = styled.p`
  margin: 0;
`;
