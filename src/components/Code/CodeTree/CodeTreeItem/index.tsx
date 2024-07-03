import React from "react";
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
}

const JobExperienceTree: React.FC<CodeTreeItemProps> = (props) => {
  const renderNodes = (data: any) => {
    const nodes = [];
    const dataKeys = Object.keys(data);
    if (!dataKeys.length) {
      return;
    }
    for (const key in data) {
      const value = data[key];
      if (key === ATTACH_TO_TITLE_KEY || key === data[ATTACH_TO_TITLE_KEY]) {
        continue;
      }
      if (key === "title") {
        nodes.push(
          <Title>
            {`${value}`}
            <TitleAttached>{data[data[ATTACH_TO_TITLE_KEY]]}</TitleAttached>
          </Title>
        );
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
                    key={item}
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
    return nodes;
  };
  return (
    <TreeContainer>
      <Section>
        <Section>{renderNodes(props)}</Section>
      </Section>
    </TreeContainer>
  );
};

export default JobExperienceTree;
