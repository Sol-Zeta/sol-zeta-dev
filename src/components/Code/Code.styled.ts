import { getColor } from "@/styles/utils";
import styled from "styled-components";

interface ValueProps {
  isNumber?: boolean;
}
interface CodeLineProps {
  margin?: string;
  padding?: string;
}

export const CodeWrapper = styled.div<CodeLineProps>`
  color: ${getColor("code").comments};
  position: relative;
  margin: ${({margin}) => margin && margin};
  padding: ${({padding}) => padding && padding};
`;
export const CodeLine = styled.div<CodeLineProps>`
  margin: ${({margin}) => margin && margin};
  padding: ${({padding}) => padding && padding};
`;
export const Key = styled.span`
  color: ${getColor("code").key};
`;
export const Variable = styled.span`
  color: ${getColor("code").variable};
`;
export const Operator = styled.span`
  color: ${getColor("code").operator};
`;
export const Value = styled.span<ValueProps>`
  color: ${({ isNumber }) =>
    isNumber ? getColor("code").number : getColor("code").value};
`;
