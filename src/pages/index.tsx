import React from "react";
import {
  ArticleHeader,
  ArticleWrapper,
  Background,
  SectionWrapper,
} from "@/styles/pages/home.styled";
import Code, { CodeLine } from "@/components/Code";

interface Props {
  exampleProp?: string;
}

const homeSnippet: CodeLine[] = [
  {
    codeMargin: "32px 0",
    variable: "YEARS_OF_EXPERIENCE",
    value: 4,
  },
  // {
  //   codeMargin: "32px 0",
  //   variable: "FAV_TECH_STACK",
  //   value: ["ReactJS", "NextJS", "SASS", "GraphQL"],
  // },
  {
    comment: "Passionate about creating amazing digital experiences",
    codeMargin: "0 0 16px 0",
  },
  {
    comment:
      "I love turning ideas into functional ",
  },
  {
    comment:
      "products with a strong focus on user experience",
    codeMargin: "0 0 16px 0",
  },
  // {
  //   comment:
  //     "When I'm not coding, you'll find me exploring new technologies, savoring a good cup of coffee, or playing chess",
  //   codeMargin: "0 0 16px 0",
  // },
  {
    comment:
      "I occasionally teach programming classes",
    codeMargin: "0 0 16px 0",
  },
  {
    comment: "🚀 Welcome to my portfolio!",
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
          <p>👋 Hi there,</p>
          <h1>I'm Soledad</h1>
          <h2>{"> Software developer"}</h2>
        </ArticleHeader>
        <Code codeLines={homeSnippet} />
      </ArticleWrapper>
      <ArticleWrapper>Content here index</ArticleWrapper>
    </SectionWrapper>
  );
};

export default Home;
