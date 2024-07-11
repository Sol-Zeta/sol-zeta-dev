import { ProjectData, PROJECTS_DATA } from "@/utils/projects";

export const fetchPaths = () => {
  return PROJECTS_DATA.map((data) => data.id);
};

export const fetchProject = (id: string): ProjectData | undefined => {
  return PROJECTS_DATA.find((data) => data.id === id);
};
