import { getColor } from "@/styles/utils";
import styled from "styled-components";
import { IconButtonProps } from "./utils";

export const IconWrapper = styled.div<IconButtonProps>`
  &.isButton {
    cursor: pointer;
  }
  svg {
    width: ${({ width }) => `${width}px`};
    height: ${({ height }) => `${height}px`};
    fill: ${getColor("icon")};

    &:hover {
      fill: ${({ isButton }) =>
        isButton ? getColor("secondary").green : getColor("icon")};
    }
  }
`;
