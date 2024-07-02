import styled from "styled-components";
import { getColor } from "@/styles/utils";

export const CommentWrapper = styled.div`
  position: relative;
  white-space: pre-wrap;
  padding-left: 2em;
  margin-bottom: 1rem;
  color: ${getColor("code").comments};
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
`;
