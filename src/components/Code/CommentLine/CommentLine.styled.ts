import styled from "styled-components";
import { getColor } from "@/styles/utils";
import { CommentLineProps } from ".";

interface StyledBlockProps {
  isEnd?: boolean;
}

export const CommentWrapper = styled.div<CommentLineProps>`
display: flex;
flex-direction: column;
  position: relative;
  white-space: pre-wrap;
  padding-left: ${({isBlock}) => isBlock ? '0' : '2em'};
  /* margin-bottom: 1rem; */
  color: ${getColor("code").comments};
  margin: ${({isBlock}) => isBlock ? '24px 0 16px 0' : '0'};
`;

export const CommentLimit = styled.span<StyledBlockProps>`
  /* position: absolute;
  top: ${({isEnd}) => isEnd ? '' : '-20px'};
  bottom: ${({isEnd}) => isEnd ? '-20px' : '-20px'};
  left: ${({isEnd}) => isEnd ? '0' : '-10px'}; */
`;

export const StyledComment = styled.span<CommentLineProps>`
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
