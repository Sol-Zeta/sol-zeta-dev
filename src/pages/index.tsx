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
    id: "experience",
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
    id: "home-1",
    comment: "Passionate about creating amazing digital experiences",
    codeMargin: "0 0 16px 0",
  },
  {
    id: "home-2",
    comment: "I love turning ideas into functional ",
  },
  {
    id: "home-3",
    comment: "products with a strong focus on user experience",
    codeMargin: "0 0 16px 0",
  },
  // {
  //   id: 'home-4',
  //   comment:
  //     "When I'm not coding, you'll find me exploring new technologies, savoring a good cup of coffee, or playing chess",
  //   codeMargin: "0 0 16px 0",
  // },
  {
    id: "home-5",
    comment:
      "I enjoy sharing knowledge, \nwhich is why sometimes I teach programming classes",
    codeMargin: "0 0 16px 0",
  },
  {
    id: "home-6",
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
          <h1>I&apos;m Soledad</h1>
          <h2>{"> Software developer"}</h2>
        </ArticleHeader>
        <Code codeLines={homeSnippet} />
      </ArticleWrapper>
      <ArticleWrapper></ArticleWrapper>
    </SectionWrapper>
  );
};

export default Home;
