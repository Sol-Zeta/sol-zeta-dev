import { styled } from "styled-components";

export const GistListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: relative;
  z-index: 5;
  overflow: hidden;
  &:hover {
    overflow-y: scroll;
  }
`;
export const CardList = styled.section`
  /* display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 10;
  width: 100%; */
`;
