import React, { FC } from "react";
import { GithubCardWrapper } from "./GithubCard.styled";
import Snippet from "./Snippet";
import UserHeader from "./UserHeader";
import { Gist } from "@/types/github";

export interface GistCard {
   creationDate: Date;
   url: string;
   description: string;
   code: string;
}

export interface GithubCardProps {
  gist: GistCard;
  user: any;
}

const GithubCard: FC<GithubCardProps> = ({ gist, user }) => (
  <GithubCardWrapper data-testid="GithubCard">
    <UserHeader
      user={user}
      creationDate={gist.creationDate}
      snippetUrl={gist.url}
      description={gist.description}
    />
    <Snippet codeString={gist.code} />
  </GithubCardWrapper>
);

export default GithubCard;
