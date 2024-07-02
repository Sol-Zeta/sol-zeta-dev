import IdeLayout from "@/components/IdeLayout";
import { TreeMenuItem } from "@/components/TreeMenu";
import { getColor } from "@/styles/utils";
import React from "react";

interface Props {
  exampleProp?: string;
}
const TREE_MENU_DATA = [
  {
    title: "filter-by-tech",
    items: [
      { title: "bio", color: getColor("accent").salmon },
      { title: "tech-skills", color: getColor("accent").green },
      { title: "education", color: getColor("secondary").blue },
    ],
  },
];

const Home: React.FC<Props> = () => {
  return (
    <div>
      <IdeLayout menuItems={TREE_MENU_DATA as unknown as TreeMenuItem[]}>
        <div>Content here projects</div>
      </IdeLayout>
    </div>
  );
};

export default Home;
