import { getBreakpoint, getColor, getFontSize } from "@/styles/utils";
import styled from "styled-components";

export const SectionWrapper = styled.section`
  max-width: 100%;
  overflow-x: hidden;
  height: 100%;
  padding: 0 8%;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: ${getBreakpoint("md")}) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const ArticleWrapper = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px 0;
  &:last-of-type {
    display: none;
  }
  @media (min-width: ${getBreakpoint("md")}) {
    justify-content: center;
    padding: 48px 24px;
    width: 50%;
    &:first-of-type {
      padding: 120px 64px;
      width: 70%;
    }
    &:last-of-type {
      display: flex;
    }
  }
`;

export const ArticleHeader = styled.div`
  margin-bottom: 8px;
  h1 {
    margin-top: 4px;
    margin-bottom: 8px;
    font-size: ${getFontSize("xxl")};
  }
  h2 {
    color: ${getColor("secondary").green};
    font-size: ${getFontSize("lg")};
  }
  @media (min-width: ${getBreakpoint("md")}) {
    h1 {
    }
    h2 {
    }
  }
`;

export const Background = styled.div`
  display: none;
  width: 70%;
  height: 100%;
  padding: 80px;
  position: absolute;
  z-index: 0;
  right: 10%;
  transform: translate(40%, -10%);
  & > div {
    width: 45%;
    height: 45%;
    position: relative;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.6;
    background: ${getColor("secondary").green};
  }
  & > div:last-child {
    background: ${getColor("accent").plum};
    bottom: -30%;
    right: -30%;
  }
  @media (min-width: ${getBreakpoint("md")}) {
    display: block;
  }
`;
