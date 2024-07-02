import React, { FC, useRef } from "react";
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
  margin?: string;
  padding?: string;
}

export interface CodeProps {
  codeLines: CodeLine[];
  margin?: string;
  padding?: string;
}

const Code: FC<CodeProps> = ({ codeLines, margin, padding }) => {
  return (
    <CodeWrapper data-testid="Code" margin={margin} padding={padding}>
      {codeLines.map((line: CodeLine) =>
        line.comment ? (
          <CodeLine margin={line.margin} padding={line.padding}>
            {/* <p>{`// ${line.comment}`}</p> */}
            <CommentLine>{line.comment}</CommentLine>
          </CodeLine>
        ) : line.variable ? (
          <CodeLine margin={line.margin} padding={line.padding}>
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
