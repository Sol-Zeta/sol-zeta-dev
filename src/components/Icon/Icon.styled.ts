import { getColor } from "@/styles/utils";
import styled from "styled-components";
import { IconButtonProps } from ".";

export const IconWrapper = styled.div<IconButtonProps>`
  width: 24px;
  height: 24px;
  cursor: ${({ isButton }) => isButton && "pointer"};
  svg {
    width: 20px; /* Adjust the width as needed */
    height: 20px; /* Adjust the height as needed */
    fill: ${getColor("icon")}; /* Set the initial fill color */

    &:hover {
      fill: ${({ isButton }) =>
        isButton
          ? getColor("secondary").green
          : getColor("icon")}; /* Change color on hover */
    }
  }
`;
