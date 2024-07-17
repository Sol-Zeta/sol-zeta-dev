import { getColor } from "@/styles/utils";
import styled from "styled-components";
import { IconButtonProps } from "./utils";

export const IconWrapper = styled.div<IconButtonProps>`
  &.isButton {
    cursor: pointer;
    &:hover {
      svg {
        fill: ${getColor("secondary").green};
      }
    }
  }
  svg {
    width: ${({ width }) => `${width}px`};
    height: ${({ height }) => `${height}px`};
    fill: ${getColor("icon")};
  }
`;
