import { getColor } from "@/styles/utils";
import styled from "styled-components";

export const SectionWrapper = styled.section`
  width: 100%;
  height: 100%;
  padding: 0 10%;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const ArticleWrapper = styled.article`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:first-of-type {
    padding: 120px 64px;
  }
`;
export const ArticleHeader = styled.div`
  margin-bottom: 48px;
  h1 {
    margin-top: 16px;
    margin-bottom: 16px;
  }
  h2 {
    color: ${getColor('accent').orange}
  }
`;

export const Background = styled.div`
  width: 70%;
  height: 100%;
  padding: 80px;
  position: absolute;
  right: 10%;
  transform: translate(40%, -10%);
  & > div {
    width: 45%;
    height: 45%;
    position: relative;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.6;
    background: ${getColor("accent").green};
  }
  & > div:last-child {
    background: ${getColor("accent").plum};
    bottom: -30%;
    right: -30%;
  }
`;
