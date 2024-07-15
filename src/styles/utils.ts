//@ts-ignore
import { css } from "styled-components";
import theme from "./theme";

export const codeStyle = css`
  color: ${(props) => props.theme.colors.text.code};
  padding: 0.2em 0.4em;
`;

export const font = css`
  font-family: ${(props) => props.theme.fonts.primary};
`;

export const flexTheme = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const borderTheme = css`
  border: 1px solid ${(props) => props.theme.colors.line.primary};
`;

export const buttonPadding = css`
  padding: 16px 32px;
`;

export const getColor = (key: string): any => theme.colors[key];
export const getTheme = (key: string, size: string = "md"): any =>
  theme[key][size];
export const getFontSize = (size: string = "md"): any => theme.fontSize[size];
export const getBorder = (): any => `1px solid ${theme.colors.line.primary}`;
export const getBorderRadius = (size: string = "md"): any =>
  theme.borderRadius[size];
export const getBreakpoint = (key: string): any => theme.breakpoints[key];
