"use client";
import React, { useEffect, useRef, useState } from "react";
import GithubCard, { GistCard } from "@/components/GithubCard";
import { GistListWrapper, CardList } from "./GistList.styled";
import { Gist } from "@/types/github";

export interface GistListProps {
  user: any;
  gists: GistCard[];
}

const GistList: React.FC<GistListProps> = ({ user, gists }) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    const scrollStep = () => {
      if (listRef.current && !isHovered) {
        listRef.current.scrollTop += 1;
        if (listRef.current.scrollTop >= listRef.current.scrollHeight / 2) {
          listRef.current.scrollTop = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scrollStep);
    };

    animationFrameId = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  return (
    <GistListWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={listRef}
    >
      <CardList>

      {gists.map((gist: GistCard, index: number) => (
        <GithubCard key={index} gist={gist} user={user} />
      ))}
      {gists.map((gist: GistCard, index: number) => (
        <GithubCard key={index} gist={gist} user={user} />
      ))}
      </CardList>
    </GistListWrapper>
  );
};

export default GistList;
