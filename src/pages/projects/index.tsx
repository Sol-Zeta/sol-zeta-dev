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
    isCheckboxList: true,
    items: [
      { title: "bio", color: getColor("accent").salmon },
      { title: "tech-skills", color: getColor("accent").green },
      { title: "education", color: getColor("secondary").blue },
    ],
  },
];

const Projects: React.FC<Props> = () => {
  return (
    <div>
      <IdeLayout menuItems={TREE_MENU_DATA as unknown as TreeMenuItem[]} mainContent={[]}>
        <div>Content here projects</div>
      </IdeLayout>
    </div>
  );
};

export default Projects;
