import styled from "styled-components";
import { getColor } from "@/styles/utils";
import { CommentLineProps } from ".";

interface StyledBlockProps {
  isEnd?: boolean;
}

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  white-space: pre-wrap;
  color: ${getColor("code").comments};
  /* margin-bottom: 1rem; */
  padding-left: 2em;
  margin: 0;
  &.isBlock {
    padding-left: "0";
    margin: "24px 0 16px 0";
  }
`;

export const CommentLimit = styled.span<StyledBlockProps>`
  /* position: absolute;
  top: ${({ isEnd }) => (isEnd ? "" : "-20px")};
  bottom: ${({ isEnd }) => (isEnd ? "-20px" : "-20px")};
  left: ${({ isEnd }) => (isEnd ? "0" : "-10px")}; */
`;

export const StyledComment = styled.span`
  &::before {
    content: "//";
    position: absolute;
    left: 0;
  }
  &::after {
    content: "//";
    position: absolute;
    left: 0;
  }
  &.isBlock::before,
  &.isBlock::after {
    content: "";
  }
`;
