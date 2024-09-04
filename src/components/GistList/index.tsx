import React, { useEffect, useRef, useState } from "react";
import GithubCard, { GistCard } from "@/components/GithubCard";
import { GistListWrapper } from "./GistList.styled";
import { getGistsData, GistData } from "./utils";
import Loader from "@/components/Loader";

export interface GistListProps {
  animate?: boolean;
  showLoader?: boolean;
}

const GistList: React.FC<GistListProps> = ({
  animate = true,
  showLoader = true,
}) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [{ user, gists }, setGistsData] = useState<GistData>({});
  const [isLoading, setIsLoading] = useState(true);
  const [showList, setShowList] = useState(false);

  const getData = async () => {
    const ERROR_MESSAGE = "Error getting GitHub Gists";
    try {
      setIsLoading(true);
      const data = await getGistsData();
      if (!data) {
        throw new Error(ERROR_MESSAGE);
      }
      setGistsData(data);
    } catch (error) {
      console.error(ERROR_MESSAGE, error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (isLoading) {
      setShowList(false);
      return;
    }
    setShowList(true);
  }, [isLoading]);

  useEffect(() => {
    if (!animate) return;
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
    <>
      {isLoading && showLoader ? (
        <Loader />
      ) : (
        <GistListWrapper
          className={showList ? "fadeIn" : ""}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={listRef}
        >
          {gists?.length &&
            gists?.map((gist: GistCard, index: number) => (
              <GithubCard key={index} gist={gist} user={user || {}} />
            ))}
          {gists?.length &&
            gists?.map((gist: GistCard, index: number) => (
              <GithubCard key={index} gist={gist} user={user || {}} />
            ))}
        </GistListWrapper>
      )}
    </>
  );
};

export default GistList;
