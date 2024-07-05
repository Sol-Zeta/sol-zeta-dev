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
  TitleContainer,
} from "./CodeTreeItem.styled";

export const ATTACH_TO_TITLE_KEY = "ATTACH_TO_TITLE_KEY";
export const AT = "AT";

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
  if (!dataKeys.length) {
    return;
  }
  for (const key in data) {
    const value = data[key];
    const isLastListAttribute = dataKeys[dataKeys.length - 1] === key;
    if (
      key === ATTACH_TO_TITLE_KEY ||
      key === data[ATTACH_TO_TITLE_KEY] ||
      key === AT ||
      key === "id"
    ) {
      continue;
    }
    if (key === "title") {
      titleNode.push(
        <TitleContainer>
          <Title
            className={`${isOpen && "open"}`}
            onClick={() => handleTitleClick(data.id, openNodes, setOpenNodes)}
          >
            {`${value} ${data.hasOwnProperty(AT) ? `@ ${data[AT]}` : ""}`}
          </Title>
          <TitleAttached>{data[data[ATTACH_TO_TITLE_KEY]]}</TitleAttached>
        </TitleContainer>
      );
      if (!isOpen) break;
      continue;
    }
    if (typeof value === "string") {
      nodes.push(
        <Subtitle className={`${isLastListAttribute && "last"}`}>
          <Highlighted>{`${key}: `}</Highlighted>
          {value}
        </Subtitle>
      );
      continue;
    }
    if (typeof value === "object" && value.length) {
      const listNode = (
        <>
          <Subtitle className={`${isLastListAttribute && "last"}`}>
            <Highlighted>{`${key}:`}</Highlighted>
          </Subtitle>
          <List>
            {value.map((item: string, index: number) => {
              const isLastItem = index === value.length - 1;
              return (
                <ListItem
                  key={value.id}
                  className={`${isLastListAttribute && "noLine"} ${
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
