import { styled } from "styled-components";

export const GistListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: relative;
  z-index: 5;
  overflow: hidden;
  width: calc(100% - 20px);
  opacity: 0;

  &:hover {
    width: 100%;
    overflow-y: scroll;
  }
`;
