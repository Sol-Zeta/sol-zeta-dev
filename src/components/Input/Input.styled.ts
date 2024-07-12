import { getBorderRadius, getColor, getFontSize } from "@/styles/utils";
import styled from "styled-components";
import { InputProps, InputVariants } from ".";

export const InputWrapper = styled.div<InputProps>`
  min-width: 100%;
`;
export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
export const StyledInput = styled.input<InputProps>`
  width: 100%;
  padding: 12px 16px;
  background-color: ${({ variant }) =>
    variant === InputVariants.PRIMARY
      ? "transparent"
      : `${getColor("background").dark}`};
  box-shadow: none;
  border-bottom: 1px solid ${getColor("line").primary};
  border: ${({ variant }) =>
    variant === InputVariants.PRIMARY
      ? "none"
      : `1px solid ${getColor("line").primary}`};
  border-radius: ${getBorderRadius()};
  font-family: inherit;
  font-size: ${getFontSize()};
  color: ${getColor("secondary").white};
  caret-color: ${getColor("secondary").green};
  margin-top: ${({ variant }) =>
    variant === InputVariants.OUTLINED ? "12px" : "0px"};
  &:focus {
    outline: none;
    box-shadow: none;
    border: ${({ variant }) =>
      variant === InputVariants.OUTLINED
        ? `1px solid ${getColor("secondary").green}`
        : "none"};
    border-bottom: ${({ variant }) =>
      variant === InputVariants.PRIMARY
        ? `1px solid ${getColor("secondary").gray}`
        : "inherit"};
  }
  &::placeholder {
    color: ${getColor("accent").green};
  }
`;
export const StyledTextarea = styled.textarea<InputProps>`
resize: none;
  width: 100%;
  padding: 12px 16px;
  background-color: ${({ variant }) =>
    variant === InputVariants.PRIMARY
      ? "transparent"
      : `${getColor("background").dark}`};
  box-shadow: none;
  border-bottom: 1px solid ${getColor("line").primary};
  border: ${({ variant }) =>
    variant === InputVariants.PRIMARY
      ? "none"
      : `1px solid ${getColor("line").primary}`};
  border-radius: ${getBorderRadius()};
  font-family: inherit;
  font-size: ${getFontSize()};
  color: ${getColor("secondary").white};
  caret-color: ${getColor("secondary").green};
  margin-top: ${({ variant }) =>
    variant === InputVariants.OUTLINED ? "12px" : "0px"};
  &:focus {
    outline: none;
    box-shadow: none;
    border: ${({ variant }) =>
      variant === InputVariants.OUTLINED
        ? `1px solid ${getColor("secondary").green}`
        : "none"};
    border-bottom: ${({ variant }) =>
      variant === InputVariants.PRIMARY
        ? `1px solid ${getColor("secondary").gray}`
        : "inherit"};
  }
  &::placeholder {
    color: ${getColor("accent").green};
  }
`;
export const Label = styled.label<InputProps>`
  color: ${getColor("secondary").gray};
`;
