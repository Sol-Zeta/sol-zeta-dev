import React, { FC } from "react";
import {
  CodeWrapper,
  Key,
  Operator,
  Value,
  Variable,
  CodeLine,
} from "./Code.styled";
import CommentLine from "./CommentLine";

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
}

const Code: FC<CodeProps> = ({ codeLines, codeMargin, codePadding }) => {
  return (
    <CodeWrapper data-testid="Code" codeMargin={codeMargin} codePadding={codePadding}>
      {codeLines.map((line: CodeLine) =>
        line.comment ? (
          <CodeLine codeMargin={line.codeMargin} codePadding={line.codePadding}>
            <CommentLine isBlock={line.isBlock} comment={line.comment} />
          </CodeLine>
        ) : line.variable ? (
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
        ) : (
          <p></p>
        )
      )}
    </CodeWrapper>
  );
};

export default Code;
