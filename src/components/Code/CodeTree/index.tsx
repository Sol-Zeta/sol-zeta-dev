import React, { FC } from "react";
import { CodeTreeWrapper } from "./CodeTree.styled";
import CodeTreeItem, { CodeTreeItemProps } from "./CodeTreeItem";
import Code from "@/components/Code";

export interface CodeTreeProps {
  data: CodeTreeItemProps[];
}

const CodeTree: FC<CodeTreeProps> = ({ data }) => {
  return (
    <CodeTreeWrapper data-testid="CodeTree">
      <Code
        codeLines={[
          {
            id: "code-tree",
            comment: "CLICK ON EACH ITEM FOR MORE DETAILS",
            codeMargin: "16px 0 32px 0",
          },
        ]}
      />
      {data.map((item) => (
        <CodeTreeItem {...item} key={item.id} />
      ))}
    </CodeTreeWrapper>
  );
};

export default CodeTree;
