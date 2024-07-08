import { Icons } from "@/components/Icon";
import IdeLayout from "@/components/IdeLayout";
import { TreeMenuItem } from "@/components/TreeMenu";
import { getColor } from "@/styles/utils";
import React from "react";

interface Props {
  exampleProp?: string;
}
const TREE_MENU_DATA = [
  {
    title: "technologies",
    isCheckboxList: true,
    items: [
      { title: "React JS", icon: Icons.REACT },
      { title: "Redux", icon: Icons.REDUX },
      { title: "Next JS", icon: Icons.NEXTJS },
      { title: "Vercel", icon: Icons.VERCEL },
      { title: "HTML 5", icon: Icons.HTML },
      { title: "CSS 3", icon: Icons.CSS },
      { title: "SASS", icon: Icons.SASS },
      { title: "Tailwind", icon: Icons.TAILWIND },
      { title: "Storybook", icon: Icons.STORYBOOK },
      { title: "Figma", icon: Icons.FIGMA },
      { title: "Tailwind", icon: Icons.TAILWIND },
      { title: "JavaScript", icon: Icons.JAVASCRIPT },
      { title: "TypeScript", icon: Icons.TYPESCRIPT },
      { title: "Git", icon: Icons.GIT },
      { title: "Github", icon: Icons.GITHUB },
      { title: "Gitlab", icon: Icons.GITLAB },
      { title: "Jest", icon: Icons.JEST },
      { title: "Cypress", icon: Icons.CYPRESS },
      { title: "GraphQL", icon: Icons.GRAPHQL },
      { title: "Firebase", icon: Icons.FIREBASE },
      { title: "NodeJs", icon: Icons.NODEJS },
      { title: "NPM", icon: Icons.NPM },
      { title: "ExpressJS", icon: Icons.EXPRESS },
      { title: "Strapi", icon: Icons.STRAPI },
      { title: "MongoDB", icon: Icons.MONGO },
      { title: "PostgreSQL", icon: Icons.POSTGRESQL },
      { title: "Jira", icon: Icons.JIRA },
      { title: "Azure", icon: Icons.AZURE },
      { title: "Jenkins", icon: Icons.JENKINS },
      { title: "SEO Techniques", icon: Icons.SEO },
      { title: "SSR (Server Side Rendering)", icon: Icons.SERVER },
      { title: "Google Analytics", icon: Icons.GOOGLE_ANALYTICS },
      { title: "Docker", icon: Icons.DOCKER },
      { title: "Kubernetes", icon: Icons.KUBERNETES },
      { title: "AWS Cloud Services", icon: Icons.AWS },
      { title: "Chakra UI", icon: Icons.CHAKRA_UI },
      { title: "HighCharts", icon: Icons.HIGHCHARTS },
      { title: "Chakra UI", icon: Icons.CHAKRA_UI },
      { title: "React Native", icon: Icons.REACT_NATIVE },
      { title: "Expo", icon: Icons.EXPO },
      { title: "xCode", icon: Icons.XCODE },
      { title: "Android Studio", icon: Icons.ANDROID_STUDIO },
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
