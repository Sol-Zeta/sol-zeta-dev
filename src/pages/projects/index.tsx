import { Icons } from "@/components/Icon";
import IdeLayout from "@/components/IdeLayout";
import { TreeMenuItem } from "@/components/TreeMenu";
import React from "react";
import ProjectCard from "@/components/ProjectCard";
import { CardsContainer } from "@/styles/pages/projects.styled";
import { CHECKBOX_FILTERS, PROJECTS_DATA } from "@/utils/projects";

interface Props {
  exampleProp?: string;
}

const Projects: React.FC<Props> = () => {
  return (
    <IdeLayout menuItems={CHECKBOX_FILTERS as unknown as TreeMenuItem[]}>
      <CardsContainer>
        {PROJECTS_DATA.map(
          ({ id, title, description, image, tags, highlightedTags }) => (
            <ProjectCard
              id={id}
              title={title}
              description={description}
              image={image}
              tags={tags}
              highlightedTags={highlightedTags}
            />
          )
        )}
      </CardsContainer>
    </IdeLayout>
  );
};

export default Projects;
