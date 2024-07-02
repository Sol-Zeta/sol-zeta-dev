import React, { FC, useEffect, useRef, useState } from "react";
import { ContentWrapper, IdeFileWrapper } from "./IdeFile.styled";
import LineNumbers from "../LineNumbers";

interface IdeFileProps {
  component?: React.ReactNode;
}

const IdeFile: FC<IdeFileProps> = ({ component }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [linesHeight, setLinesHeight] = useState(0);

  useEffect(() => {
    if (!contentRef?.current?.offsetHeight) {
      return;
    }
    console.log({ contentRef: contentRef.current.offsetHeight });
    setLinesHeight(contentRef.current.offsetHeight);
  }, [contentRef?.current?.offsetHeight]);

  if (!component) return null;
  return (
    <IdeFileWrapper data-testid="IdeFile">
      <ContentWrapper ref={contentRef}>
        <LineNumbers height={linesHeight} />
        {component}
      </ContentWrapper>
    </IdeFileWrapper>
  );
};

export default IdeFile;
