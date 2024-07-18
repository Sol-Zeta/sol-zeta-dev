"use client";
import React from "react";
import GistList from "@/components/GistList";
import { Owner } from "@/types/github";
import { GistCard } from "@/components/GithubCard";
import {
  SnippetsWrapper,
  TitleContainer,
  SnippetsContainer,
} from "@/styles/pages/snippets.styled";
import Code from "@/components/Code";
import Icon, { Icons } from "@/components/Icon";

interface CodeSnippetsProps {
  data: {
    user?: Owner;
    gists?: GistCard[];
  };
}

const FIRST_TITLE = [
  {
    id: "snippet-title-1",
    comment: "Explore code snippets I've created for different projects. ",
  },
];
const SECOND_TITLE = [
  {
    id: "snippet-title-2",
    comment:
      "You can see more information on my Gists on GitHub by clicking on the external link icon",
  },
];

const Contact: React.FC<CodeSnippetsProps> = ({ data }) => {
  return (
    <SnippetsWrapper>
      <TitleContainer>
        <Code codeLines={FIRST_TITLE} />
        <Code codeLines={SECOND_TITLE} />
      </TitleContainer>
      <SnippetsContainer>
        <GistList animate={false} />
      </SnippetsContainer>
    </SnippetsWrapper>
  );
};

export default Contact;
