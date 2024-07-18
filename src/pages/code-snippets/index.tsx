"use client";
import React from "react";
import GistList from "@/components/GistList";
import { Owner } from "@/types/github";
import { GistCard } from "@/components/GithubCard";


interface CodeSnippetsProps {
    data: {
      user?: Owner;
      gists?: GistCard[];
    };
  }

const Contact: React.FC<CodeSnippetsProps> = ({
data
}) => {

  return (
    // <SnippetsWrapper>
      <GistList />
    // </SnippetsWrapper>
  );
};

export default Contact;
