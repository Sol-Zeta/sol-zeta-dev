import { styled } from "styled-components";
import { ButtonProps } from ".";
import { getBorderRadius, getColor } from "@/styles/utils";

export const ButtonWrapper = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  background-color: ${getColor("button").primary};
  color: ${getColor("text").secondary};
  font-family: inherit;
  padding: 12px 16px;
  border-radius: ${getBorderRadius()};
  cursor: pointer;
  gap: 12px;
  & svg {
    fill: inherit;
  }
  &:hover {
    background-color: ${getColor("button").primaryHover};
  }
  &.after {
    flex-direction: row-reverse;
  }
  &.secondary {
    background-color: ${getColor("button").secondary};
    color: ${getColor("text").primary};
    & svg {
      fill: ${getColor("secondary").white};
    }
    &:hover {
      background-color: ${getColor("button").secondaryHover};
    }
  }
  &.outlined {
    background-color: transparent;
    border: 1px solid ${getColor("secondary").white};
    color: ${getColor("secondary").white};
    & svg {
      fill: ${getColor("secondary").white};
    }
    &:hover {
      border-color: ${getColor("secondary").white70};
    }
    &:focus {
      border-color: ${getColor("secondary").green};
      background-color: red;
    }
  }
  &.link {
    padding: 0 2px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${getColor("secondary").white};
    border-radius: 0;
    color: ${getColor("secondary").white};
    & svg {
      fill: ${getColor("secondary").white};
    }
    &:hover {
      border-color: ${getColor("button").primaryHover};
      color: ${getColor("button").primaryHover};
      & svg {
        fill: ${getColor("button").primaryHover};
      }
    }
  }
  &.soft {
    padding: 0 2px;
    background-color: transparent;
    border: none;
    border-radius: 0;
    color: ${getColor("secondary").gray};
    & svg {
      fill: ${getColor("secondary").gray};
    }
    &:hover {
      border-color: ${getColor("secondary").white};
      color: ${getColor("secondary").white};
      & svg {
        fill: ${getColor("secondary").white};
      }
    }
  }
`;
