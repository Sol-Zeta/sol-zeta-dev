import React, { FC } from "react";
import { CodeTreeWrapper } from "./CodeTree.styled";
import CodeTreeItem, { CodeTreeItemProps } from "./CodeTreeItem";

export interface CodeTreeProps {
  data: CodeTreeItemProps[];
}

const CodeTree: FC<CodeTreeProps> = ({ data }) => {
  return (
    <CodeTreeWrapper data-testid="CodeTree">
      {data.map((item, index) => (
        <CodeTreeItem {...item} key={`tree-item-${index}`}/>
      ))}
    </CodeTreeWrapper>
  );
};

export default CodeTree;
