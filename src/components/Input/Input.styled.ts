import { getBorderRadius, getColor, getFontSize } from "@/styles/utils";
import styled from "styled-components";
import { InputProps, InputVariants } from ".";

export const InputWrapper = styled.div`
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
  background-color: transparent;
  box-shadow: none;
  border-bottom: 1px solid ${getColor("line").primary};
  border: none;
  border-radius: ${getBorderRadius()};
  font-family: inherit;
  font-size: ${getFontSize()};
  color: ${getColor("secondary").white};
  caret-color: ${getColor("secondary").green};
  margin-top: 0;
  &:focus {
    outline: none;
    box-shadow: none;
    border: "none";
    border-bottom: 1px solid ${getColor("secondary").gray};
  }
  &::placeholder {
    color: ${getColor("accent").green};
  }
  &.outlined {
    background-color: ${getColor("background").dark};
    border: 1px solid ${getColor("line").primary};
    margin-top: 12px;
  }
  &.outlined:focus {
    border: 1px solid ${getColor("secondary").green};
    border-bottom: inherit;
  }
`;
export const StyledTextarea = styled.textarea<InputProps>`
  resize: none;
  width: 100%;
  padding: 12px 16px;
  background-color: transparent;
  box-shadow: none;
  border-bottom: 1px solid ${getColor("line").primary};
  border: none;
  border-radius: ${getBorderRadius()};
  font-family: inherit;
  font-size: ${getFontSize()};
  color: ${getColor("secondary").white};
  caret-color: ${getColor("secondary").green};
  margin-top: 0;
  &:focus {
    outline: none;
    box-shadow: none;
    border: none;
    border-bottom: 1px solid ${getColor("secondary").gray};
  }
  &::placeholder {
    color: ${getColor("accent").green};
  }
  &.outlined {
    background-color: ${getColor("background").dark};
    border: 1px solid ${getColor("line").primary};
    margin-top: 12px;
  }
  &.outlined:focus {
    border: 1px solid ${getColor("secondary").green};
    border-bottom: inherit;
  }
`;
export const Label = styled.label<InputProps>`
  color: ${getColor("secondary").gray};
`;
