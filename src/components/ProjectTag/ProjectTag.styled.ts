import { getColor, getFontSize } from "@/styles/utils";
import styled from "styled-components";

interface WrapperProps {
  color: string;
}

export const ProjectTagWrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: center;
  align-items: start;
  position: relative;
  background-color: ${({ color }) => color};
  padding: 8px;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  cursor: pointer;
  & svg {
    fill: ${getColor("background").dark};
  }
`;
