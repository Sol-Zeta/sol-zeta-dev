import React, { FC } from "react";
import { CommentWrapper, StyledComment } from "./CommentLine.styled";

interface CommentLineProps {
  children: React.ReactNode;
}

const CommentLine: FC<CommentLineProps> = ({ children }) => (
  <CommentWrapper data-testid="Comment">
    <StyledComment>{children}</StyledComment>
  </CommentWrapper>
);

export default CommentLine;
