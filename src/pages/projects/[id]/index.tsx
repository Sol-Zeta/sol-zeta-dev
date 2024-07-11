import React from "react";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  ProjectWrapper,
  ContentWrapper,
  Title,
  ContentBody,
  ParagraphContainer,
  ImageContainer,
  Text,
  ShortDescription,
  TagsTitle,
  TagsContainer,
} from "./project.styled";
import { ParsedUrlQuery } from "querystring";
import { fetchPaths, fetchProject } from "./utils";
import { Icons } from "@/components/Icon";
import { useRouter } from "next/router";
import Button, { ButtonVariants } from "@/components/Button";
import { ProjectData } from "@/utils/projects";
import ProjectTag from "@/components/ProjectTag";
import Code from "@/components/Code";

interface PageProps {
  data?: ProjectData;
}

interface Params extends ParsedUrlQuery {
  id: string;
}

const Projects: React.FC<PageProps> = ({ data }) => {
  const router = useRouter();
  if (!data) return "holi";
  return (
    <ProjectWrapper>
      <Button
        variant={ButtonVariants.OUTLINED}
        icon={Icons.CHEVRON_LEFT}
        onClick={() => router.push("/projects")}
      >
        {"back-to-projects"}
      </Button>
      <ContentWrapper>
        <Title>{`// ${data.title}`}</Title>
        <ShortDescription>{data.description}</ShortDescription>
        <ContentBody>
          {data.fullContent.map(({ image, imageAlt, text }, index) => (
            <ParagraphContainer key={text} className={(index + 1) % 2 === 0 ? "even" : ""}>
              {image ? (
                <ImageContainer>
                  <Image
                    src={image}
                    alt={imageAlt || data.id}
                    layout="responsive"
                    width={300} // Original width of the image
                    height={475} // Original height of the image
                    objectFit="cover" // This can be 'cover', 'contain', 'fill', etc.
                  />
                </ImageContainer>
              ) : null}
              {text ? <Text>{text}</Text> : null}
            </ParagraphContainer>
          ))}
          <Code codeLines={[{
            comment: "This project has been made with the following technologies:"
          }]} />
          <TagsContainer>
            {data.tags
              .concat(data.tags)
              .concat(data.tags)
              .concat(data.tags)
              .map((tag) => (
                <ProjectTag key={tag.id} id={tag.id} icon={tag.icon} color={tag.color} />
              ))}
          </TagsContainer>
        </ContentBody>
      </ContentWrapper>
    </ProjectWrapper>
  );
};

export default Projects;

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  // Fetch data to determine which paths to pre-render
  const paths = await fetchPaths();

  return {
    paths: paths.map((id: string) => ({ params: { id } })),
    fallback: false, // or true/'blocking'
  };
};

export const getStaticProps: GetStaticProps<PageProps, Params> = (context) => {
  const { id } = context.params!;
  // Fetch data for a specific page based on params
  const project = fetchProject(id);

  return {
    props: {
      data: project,
    },
  };
};
