import React from "react";
import IdeLayout from "@/components/IdeLayout";
import { TreeMenuItem } from "@/components/TreeMenu";
import { getColor } from "@/styles/utils";

interface Props {
  exampleProp?: string;
}

const TREE_MENU_DATA = [
  {
    title: "personal-info",
    items: [
      { title: "bio", color: getColor("accent").salmon },
      { title: "tech-skills", color: getColor("accent").green },
      { title: "education", color: getColor("secondary").blue },
    ],
  },
];

const Home: React.FC<Props> = () => {
  return (
    <IdeLayout menuItems={TREE_MENU_DATA as unknown as TreeMenuItem[]}>
      <div>Content here about</div>
    </IdeLayout>
  );
};

export default Home;
