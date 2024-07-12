import React, { FC } from "react";
import {
  ProjectCardWrapper,
  Title,
  Description,
  HeaderContainer,
  TagsContainer,
  TextContainer,
} from "./ProjectCard.styled";
import { TechTag } from "@/components/ProjectTag/utils";
import ProjectTag from "../ProjectTag";
import Button, { ButtonVariants } from "../Button";
import { trimText } from "@/utils/text";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: TechTag[];
  highlightedTags: TechTag[];
}

const ProjectCard: FC<ProjectCardProps> = ({
  id,
  title,
  description,
  image,
  tags,
  highlightedTags,
}) => {
  const router = useRouter();
  return (
    <ProjectCardWrapper data-testid="ProjectCard">
      <HeaderContainer src={image}>
        <Title>{`// ${title}`}</Title>
        <TagsContainer>
          {highlightedTags.map((tag) => {
            return (
              <ProjectTag
                key={tag.id}
                icon={tag.icon}
                id={tag.id}
                color={tag.color}
              />
            );
          })}
        </TagsContainer>
      </HeaderContainer>
      <TextContainer>
        <Description>{trimText(description)}</Description>
        <Button
          variant={ButtonVariants.SECONDARY}
          onClick={() => router.push(`/projects/${id}`)}
        >
          view-project
        </Button>
      </TextContainer>
    </ProjectCardWrapper>
  );
};

export default ProjectCard;
