import React from "react";
import IdeLayout from "@/components/IdeLayout";
import { TreeMenuItem } from "@/components/TreeMenu";
import Code from "@/components/Code/Code";
import { AboutWrapper } from "./about.styled";
import { LEFT_CONTENT, TREE_MENU_DATA } from "./utils";

interface AboutProps {
  exampleProp?: string;
}

const About: React.FC<AboutProps> = () => {
  const getLeftContent = () =>
    LEFT_CONTENT.map(({ snippet, ...data }) => ({
      ...data,
      component: <Code key={data.id} codeLines={snippet} />,
    }));
  return (
    <IdeLayout
      menuItems={TREE_MENU_DATA as unknown as TreeMenuItem[]}
      leftContent={getLeftContent()}
    >
      hola
      {/* <AboutWrapper>
        <Code codeLines={aboutSnippet} />
      </AboutWrapper> */}
    </IdeLayout>
  );
};

export default About;
