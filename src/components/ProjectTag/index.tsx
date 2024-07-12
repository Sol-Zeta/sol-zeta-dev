import React, { FC } from "react";
import { ProjectTagWrapper } from "./ProjectTag.styled";
import { TechTag } from "./utils";
import Icon from "../Icon";

const ProjectTag: FC<TechTag> = ({ id, icon, color }) => (
  <ProjectTagWrapper data-testid="ProjectTag" color={color}>
    <Icon icon={icon} />
  </ProjectTagWrapper>
);

export default ProjectTag;
