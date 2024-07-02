import { getColor } from "@/styles/utils";
import styled from "styled-components";

interface ValueProps {
  isNumber?: boolean;
}
interface CodeLineProps {
  codeMargin?: string;
  codePadding?: string;
}

export const CodeWrapper = styled.div<CodeLineProps>`
  color: ${getColor("code").comments};
  position: relative;
  margin: ${({codeMargin}) => codeMargin && codeMargin};
  padding: ${({codePadding}) => codePadding && codePadding};
`;
export const CodeLine = styled.div<CodeLineProps>`
  margin: ${({codeMargin}) => codeMargin && codeMargin};
  padding: ${({codePadding}) => codePadding && codePadding};
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
