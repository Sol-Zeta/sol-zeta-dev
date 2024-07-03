import styled from "styled-components";
import { getColor } from "@/styles/utils";

export const LineNumbersWrapper = styled.div`
  color: ${getColor("secondary").gray};
  position: absolute;
  top: 80px;
  left: 30px;
`;

export const LineNumber = styled.p`
  margin: 0;
`;
