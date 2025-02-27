import React, { FC } from "react";
import {
  CommentLimit,
  CommentWrapper,
  StyledComment,
} from "./CommentLine.styled";

export interface CommentLineProps {
  comment?: string;
  isBlock?: boolean;
}

const CommentLine: FC<CommentLineProps> = ({
  comment = "",
  isBlock = false,
}) => (
  <CommentWrapper data-testid="Comment" className={`${isBlock ? 'isBlock' : ''}`}>
    {isBlock && comment?.length > 1 ? (
      <>
        {/* <CommentLimit>{'/**'}</CommentLimit> */}
        {comment.split("\n").map((line) => (
          <StyledComment key={line.substring(10)} className={isBlock && "isBlock"}>
            {line}
          </StyledComment>
        ))}
      </>
    ) : (
      <StyledComment className={`${isBlock ? 'isBlock' : ''}`}>{comment}</StyledComment>
    )}
  </CommentWrapper>
);

export default CommentLine;
