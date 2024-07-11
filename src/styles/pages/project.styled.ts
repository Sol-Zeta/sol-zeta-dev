import { getColor, getFontSize } from "@/styles/utils";
import { styled } from "styled-components";

export const ProjectWrapper = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  & button {
    position: absolute;
    top: 32px;
    left: 32px;
  }
`;
export const ContentWrapper = styled.section`
  padding: 48px;
  background-color: ${getColor("background").light};
  width: 100%;
  max-width: 980px;
  height: 100%;
  overflow-y: scroll;
  margin: auto;
  color: ${getColor("secondary").gray};
`;

export const Title = styled.h2`
  font-size: ${getFontSize("xl")};
  padding-bottom: 24px;
  border-bottom: 1px solid ${getColor("secondary").gray};
`;
export const ShortDescription = styled.h1`
  font-size: ${getFontSize("lg")};
  font-style: italic;
  padding: 32px 0;
  /* border-bottom: 1px solid ${getColor("secondary").gray}; */
`;
export const ContentBody = styled.main``;
export const ParagraphContainer = styled.article`
  width: 100%;
  display: flex;
  gap: 16px;
  margin-bottom: 48px;
  &.even {
    flex-direction: row-reverse;
  }
`;
export const ImageContainer = styled.article`
  min-width: 60%;
`;
export const Text = styled.p`
  line-height: 2rem;
`;

export const TagsTitle = styled.p`
  line-height: 2rem;
`;

export const TagsContainer = styled.div`
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    margin: 32px 0;
`
