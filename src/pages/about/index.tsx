import React from "react";
import IdeLayout, { LeftContent } from "@/components/IdeLayout";
import { TreeMenuItem } from "@/components/TreeMenu";
import { getColor } from "@/styles/utils";
import Code, { CodeLine } from "@/components/Code/Code";
import { AboutWrapper } from "./about.styled";

interface Props {
  exampleProp?: string;
}

const TREE_MENU_DATA = [
  {
    title: "personal-info",
    items: [
      { title: "bio", color: getColor("accent").salmon },
      { title: "job-experience", color: getColor("accent").green },
      { title: "education", color: getColor("secondary").blue },
    ],
  },
];

const bioSnippet: CodeLine[] = [
  {
    comment:
      "bio\nMy name is Soledad Pattoglio.\nI was born in BUE, but I'm currently based in MAD.",
    isBlock: true,
  },
];
const jobSnippet: CodeLine[] = [
  {
    comment:
      "job-experience\nMy name is Soledad Pattoglio.\nI was born in BUE, but I'm currently based in MAD.\nMy name is Soledad Pattoglio.\nI was born in BUE, but I'm currently based in MAD.\nMy name is Soledad Pattoglio.\nI was born in BUE, but I'm currently based in MAD.\nMy name is Soledad Pattoglio.\nI was born in BUE, but I'm currently based in MAD.\nMy name is Soledad Pattoglio.\nI was born in BUE, but I'm currently based in MAD.\nMy name is Soledad Pattoglio.\nI was born in BUE, but I'm currently based in MAD.",
    isBlock: true,
  },
];
const educationSnippet: CodeLine[] = [
  {
    comment:
      "education\nMy name is Soledad Pattoglio.\nI was born in BUE, but I'm currently based in MAD.\nMy name is Soledad Pattoglio.\nI was born in BUE, but I'm currently based in MAD.\nMy name is Soledad Pattoglio.\nI was born in BUE, but I'm currently based in MAD.",
    isBlock: true,
  },
];

const LEFT_CONTENT: LeftContent[] = [
  { id: "bio", title: "bio", component: <Code codeLines={bioSnippet} /> },
  {
    id: "job-experience",
    title: "job-experience",
    component: <Code codeLines={jobSnippet} />,
  },
  {
    id: "education",
    title: "education",
    component: <Code codeLines={educationSnippet} />,
  },
];

const About: React.FC<Props> = () => {
  return (
    <IdeLayout
      menuItems={TREE_MENU_DATA as unknown as TreeMenuItem[]}
      leftContent={LEFT_CONTENT}
    >
      hola
      {/* <AboutWrapper>
        <Code codeLines={aboutSnippet} />
      </AboutWrapper> */}
    </IdeLayout>
  );
};

export default About;
