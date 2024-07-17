import React, { FC } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darkStyle } from "./utils";
import { SnippetWrapper } from "./Snippet.styled";

import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface SnippetProps {
  codeString: string;
}

const Snippet: FC<SnippetProps> = ({ codeString }) => {
  return (
    <SnippetWrapper>
      <SyntaxHighlighter showLineNumbers style={darkStyle}>
        {/* {"const hola = 123; \n//chau \nvar array = [1, 'hello']; \n//chau \nclass React { this.name = 'react'} \nconst hola = 123; \n//chau"} */}
        {`${codeString}\n`}
      </SyntaxHighlighter>
    </SnippetWrapper>
  );
};

export default Snippet;
