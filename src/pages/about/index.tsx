import React from "react";
import IdeLayout from "@/components/IdeLayout";
import { TreeMenuItem } from "@/components/TreeMenu";
import Code, { CodeLine } from "@/components/Code/Code";
import { AboutWrapper } from "./about.styled";
import { LEFT_CONTENT, TREE_MENU_DATA } from "./utils";
import CodeTree from "@/components/Code/CodeTree";
import { CodeTreeItemProps } from "@/components/Code/CodeTree/CodeTreeItem";

interface AboutProps {
  exampleProp?: string;
}

const About: React.FC<AboutProps> = () => {
  const getLeftContent = () =>
    LEFT_CONTENT.map(({ snippet, ...data }) => ({
      ...data,
      component:
        data.id !== "job-experience" ? (
          <Code key={data.id} codeLines={snippet as CodeLine[]} />
        ) : (
          <CodeTree key={data.id} data={snippet as CodeTreeItemProps[]} />
        ),
    }));
  return (
    <IdeLayout
      menuItems={TREE_MENU_DATA as unknown as TreeMenuItem[]}
      leftContent={getLeftContent()}
    />
  );
};

export default About;
