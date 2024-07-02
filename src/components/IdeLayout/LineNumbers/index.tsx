import React, { FC, useEffect, useState } from "react";
import { LineNumber, LineNumbersWrapper } from "./LineNumbers.styled";

interface LineNumbersProps {
  height: number;
}

const LineNumbers: FC<LineNumbersProps> = ({ height }) => {
  const [lines, setLines] = useState<number[]>([]);
  console.log({ height})
  useEffect(() => {
    const newLines = Array.from(Array(Math.floor(height / 16)).keys());
    console.log({newLines, height})
    setLines(newLines);
  }, [height]);

  return (
    <LineNumbersWrapper data-testid="LineNumbers">
      {lines.map((line) => (
        <LineNumber>{line + 1}</LineNumber>
      ))}
    </LineNumbersWrapper>
  );
};

export default LineNumbers;
