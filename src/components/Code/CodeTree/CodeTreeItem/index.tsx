import React, { useEffect, useState } from "react";
import {
  Section,
  TreeContainer,
  Title,
  Subtitle,
  List,
  ListItem,
  Highlighted,
  TitleAttached,
} from "./CodeTreeItem.styled";

export const ATTACH_TO_TITLE_KEY = "ATTACH_TO_TITLE_KEY";

export interface CodeTreeItemProps {
  [key: string]: string | string[];
  [ATTACH_TO_TITLE_KEY]: string;
  id: string;
}

const handleTitleClick = (
  titleId: string,
  openNodes: string[],
  setOpenNodes: React.Dispatch<React.SetStateAction<string[]>>
) => {
  if (!openNodes.includes(titleId)) {
    setOpenNodes([...openNodes, titleId]);
    return;
  }
  const newOpenNodes = openNodes.filter((node) => node !== titleId);
  setOpenNodes(newOpenNodes);
};

const renderNodes = (
  data: any,
  openNodes: string[],
  setOpenNodes: React.Dispatch<React.SetStateAction<string[]>>
) => {
  const titleNode = [];
  const nodes = [];
  const dataKeys = Object.keys(data);
  const isOpen = openNodes?.includes(data.id);
  console.log({ data });
  if (!dataKeys.length) {
    return;
  }
  for (const key in data) {
    const value = data[key];
    if (
      key === ATTACH_TO_TITLE_KEY ||
      key === data[ATTACH_TO_TITLE_KEY] ||
      key === "id"
    ) {
      continue;
    }
    if (key === "title") {
      titleNode.push(
        <>
          <Title
            className={`${isOpen && 'open'}`}
            onClick={() => handleTitleClick(data.id, openNodes, setOpenNodes)}
          >
            {`${value} @ ${data.company}`}
          </Title>
          <TitleAttached>{data[data[ATTACH_TO_TITLE_KEY]]}</TitleAttached>
        </>
      );
      if (!isOpen) break;
      continue;
    }
    if (typeof value === "string") {
      nodes.push(
        <Subtitle>
          <Highlighted>{`${key}: `}</Highlighted>
          {value}
        </Subtitle>
      );
      continue;
    }
    if (typeof value === "object" && value.length) {
      const isLastList = dataKeys[dataKeys.length - 1] === key;
      const listNode = (
        <>
          <Subtitle className={`${isLastList && "last"}`}>
            <Highlighted>{`${key}:`}</Highlighted>
          </Subtitle>
          <List>
            {value.map((item: string, index: number) => {
              const isLastItem = index === value.length - 1;
              return (
                <ListItem
                  key={value.id}
                  className={`${isLastList && "noLine"} ${
                    isLastItem && "last"
                  }`}
                >
                  {item}
                </ListItem>
              );
            })}
          </List>
        </>
      );
      nodes.push(listNode);
    }
  }
  return (
    <>
      {titleNode}
      {nodes}
    </>
  );
};

const JobExperienceTree: React.FC<CodeTreeItemProps> = (props) => {
  const [openNodes, setOpenNodes] = useState<string[]>([]);
  const [nodes, setNodes] = useState(
    renderNodes(props, openNodes, setOpenNodes)
  );

  useEffect(() => {
    const newNodes = renderNodes(props, openNodes, setOpenNodes);
    setNodes(newNodes);
  }, [openNodes]);

  return (
    <TreeContainer>
      <Section>{nodes}</Section>
    </TreeContainer>
  );
};

export default JobExperienceTree;
