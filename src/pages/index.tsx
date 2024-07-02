import React from "react";
import {
  ArticleHeader,
  ArticleWrapper,
  Background,
  SectionWrapper,
} from "./index.styled";
import Code, { CodeLine } from "@/components/Code/Code";

interface Props {
  exampleProp?: string;
}

const homeSnippet: CodeLine[] = [
  {
    comment: "Born in BUE and currently based in MAD",
  },
  {
    comment: "Sol Zeta is my nickname, my real name is Soledad Pattoglio",
    isBlock: true
  },
  {
    comment:
      "I love to code, but I also play chess, \ntravel and make some music with my guitar",
  },
  {
    codeMargin: '32px 0',
    variable: "YEARS_OF_EXPERIENCE",
    value: 4,
  },
];

const Home: React.FC<Props> = () => {
  return (
    <SectionWrapper>
      <Background>
        <div />
        <div />
      </Background>
      <ArticleWrapper>
        <ArticleHeader>
          <p>👋 Hi there, I am</p>
          <h1>Sol Zeta</h1>
          <h2>{"> Software developer"}</h2>
        </ArticleHeader>
        <Code codeLines={homeSnippet} />
      </ArticleWrapper>
      <ArticleWrapper>Content here index</ArticleWrapper>
    </SectionWrapper>
  );
};

export default Home;
