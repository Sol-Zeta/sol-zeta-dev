import React, { FC, useEffect, useRef } from "react";
import {
  CodeWrapper,
  Key,
  Operator,
  Value,
  Variable,
  CodeLine,
  Brakets,
  Comma,
} from "./Code.styled";
import CommentLine from "./CommentLine";
import { useHeight } from "@/context/HeightContext";

export interface CodeLine {
  comment?: string;
  variable?: string;
  value?: string | number | (string | number)[];
  codeMargin?: string;
  codePadding?: string;
  isBlock?: boolean;
}

export interface CodeProps {
  codeLines: CodeLine[];
  codeMargin?: string;
  codePadding?: string;
  ref?: React.RefObject<HTMLDivElement>;
}

const Code: FC<CodeProps> = ({ codeLines, codeMargin, codePadding }) => {
  const codeRef = useRef<HTMLDivElement>(null);
  const { setHeight } = useHeight();

  const parseValue = (value?: number | string | (string | number)[]) => {
    switch (typeof value) {
      case "string":
        return `'${value}'`;
      case "number":
        return value;
      case "object":
        if (Array.isArray(value)) {
          return (
            <Brakets>
              {value.map((item, index) => {
                if (index === value.length - 1) return `'${item}'`;
                return (
                  <span key={item}>
                    {`'${item}'`}
                    <Comma />
                  </span>
                );
              })}
            </Brakets>
          );
        }
      default:
        return value;
    }
  };

  useEffect(() => {
    if (!codeRef?.current?.offsetHeight) {
      return;
    }
    setHeight(codeRef.current.offsetHeight);
  }, [codeRef?.current?.offsetHeight]);
  return (
    <CodeWrapper
      data-testid="Code"
      codeMargin={codeMargin}
      codePadding={codePadding}
      ref={codeRef}
    >
      {codeLines.map((line: CodeLine) =>
        line.comment ? (
          <CodeLine
            key={line.comment}
            codeMargin={line.codeMargin}
            codePadding={line.codePadding}
          >
            <CommentLine isBlock={line.isBlock} comment={line.comment} />
          </CodeLine>
        ) : (
          <CodeLine
            key={line.comment}
            codeMargin={line.codeMargin}
            codePadding={line.codePadding}
          >
            <Key>{`const${" "}`}</Key>
            <Variable>{`${line.variable} `}</Variable>
            <Operator>{`=${" "}`}</Operator>
            <Value isNumber={typeof line.value === "number"}>
              {parseValue(line.value)}
            </Value>
            <Operator>{`;`}</Operator>
          </CodeLine>
        )
      )}
    </CodeWrapper>
  );
};

export default Code;
