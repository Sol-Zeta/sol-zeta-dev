import React, { FC, useEffect, useState } from "react";
import { LineNumber, LineNumbersWrapper } from "./LineNumbers.styled";
import { useHeight } from "@/context/HeightContext";

interface LineNumbersProps {
  height: number;
}

const LineNumbers: FC<LineNumbersProps> = ({ height }) => {
  const { height: contextHeight } = useHeight();
  const [lines, setLines] = useState<number[]>([]);

  useEffect(() => {
    const currentHeight = height || contextHeight;
    const newLines = Array.from(Array(Math.floor(currentHeight / 25)).keys());
    setLines(newLines);
  }, [height, contextHeight]);

  return (
    <LineNumbersWrapper data-testid="LineNumbers">
      {lines.map((line) => (
        <LineNumber key={`line-number-${line}`}>{line + 1}</LineNumber>
      ))}
    </LineNumbersWrapper>
  );
};

export default LineNumbers;
