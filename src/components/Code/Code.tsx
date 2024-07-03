import React, { FC, useEffect, useRef } from "react";
import {
  CodeWrapper,
  Key,
  Operator,
  Value,
  Variable,
  CodeLine,
} from "./Code.styled";
import CommentLine from "./CommentLine";
import { useHeight } from "@/context/HeightContext";

export interface CodeLine {
  comment?: string;
  variable?: string;
  value?: string | number;
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
          <CodeLine codeMargin={line.codeMargin} codePadding={line.codePadding}>
            <CommentLine isBlock={line.isBlock} comment={line.comment} />
          </CodeLine>
        ) : (
          <CodeLine codeMargin={line.codeMargin} codePadding={line.codePadding}>
            <Key>{`const${" "}`}</Key>
            <Variable>{`${line.variable} `}</Variable>
            <Operator>{`=${" "}`}</Operator>
            <Value isNumber={typeof line.value === "number"}>{`${
              typeof line.value === "number"
                ? line.value
                : "'" + line.value + "'"
            }`}</Value>
            <Operator>{`;`}</Operator>
          </CodeLine>
        )
      )}
    </CodeWrapper>
  );
};

export default Code;
