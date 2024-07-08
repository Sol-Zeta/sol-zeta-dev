import { borderTheme, getColor } from "@/styles/utils";
import styled from "styled-components";
interface InputProps {
  checked?: boolean;
}

export const CheckboxWrapper = styled.div`
  padding: 16px 24px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

export const StyledCheckbox = styled.div<InputProps>`
  width: 20px;
  height: 20px;
  ${borderTheme}
  border-color: ${getColor("secondary").gray};
  background: ${(props) =>
    props.checked ? getColor("secondary").gray : "transparent"};
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  &::after {
    content: "";
    position: absolute;
    display: ${(props) => (props.checked ? "block" : "none")};
    left: 7.5px;
    top: 4px;
    width: 3px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  gap: 16px;
  margin-left: 8px;
  color: ${getColor("secondary").gray};
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  &.checked {
    color: ${getColor("secondary").white};
  }
`;
