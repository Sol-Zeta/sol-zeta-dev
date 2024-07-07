import React from "react";
import IdeLayout from "@/components/IdeLayout";
import { TreeMenuItem } from "@/components/TreeMenu";
import Code, { CodeLine } from "@/components/Code";
import { LEFT_CONTENT, TREE_MENU_DATA } from "@/utils/about";
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
        data.id === "bio" ? (
          <Code key={data.id} codeLines={snippet as CodeLine[]} />
        ) : (
          <CodeTree key={data.id} data={snippet as CodeTreeItemProps[]} />
        ),
    }));
  return (
    <IdeLayout
      menuItems={TREE_MENU_DATA as unknown as TreeMenuItem[]}
      mainContent={getLeftContent()}
    />
  );
};

export default About;
