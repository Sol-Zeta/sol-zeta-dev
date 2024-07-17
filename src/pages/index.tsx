import React from "react";
import {
  ArticleHeader,
  ArticleWrapper,
  Background,
  SectionWrapper,
} from "@/styles/pages/home.styled";
import Code, { CodeLine } from "@/components/Code";
import GistList, { GistListProps } from "@/components/GistList";
import { getGist, getGists, getMyGithubUser } from "@/http/services/github";
import { GetServerSideProps } from "next";
import { Gist, Owner } from "@/types/github";
import { GistCard } from "@/components/GithubCard";

interface HomeProps {
  data: {
    user?: Owner;
    gists?: GistCard[];
  };
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

const Home: React.FC<HomeProps> = ({ data }) => {
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
      <ArticleWrapper>
        {data.user && data.gists && (
          <GistList user={data.user} gists={data.gists} />
        )}
      </ArticleWrapper>
    </SectionWrapper>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<HomeProps> = async (
  context
) => {
  const user = await getMyGithubUser();
  const raw_gists = await getGists();
  const gists: GistCard[] = [];

  const gists_urls_promises = [];
  const gists_dates = [];

  if (!raw_gists?.length) {
    return {
      props: {
        data: {},
      },
    };
  }

  for (let i = 0; i < raw_gists.length; i++) {
    const filesObject = raw_gists[i].files;
    for (const key in filesObject) {
      if (Object.prototype.hasOwnProperty.call(filesObject, key)) {
        if(!key.includes('fragment')) continue;
        const gist: GistCard = {
          description: raw_gists[i].description,
          url: raw_gists[i].html_url,
          creationDate: raw_gists[i].created_at,
          code: filesObject[key].raw_url
        };
        gists.push(gist);
      }
    }
  }

  const gistsCode = await Promise.all(gists.map(gist => getGist(gist.code)))

  for (let i = 0; i < gists.length; i++) {
    gists[i].code = gistsCode[i]
  }
  console.log('----------------------', raw_gists[0])

  return {
    props: {
      data: {
        user,
        gists,
      },
    },
  };
};
