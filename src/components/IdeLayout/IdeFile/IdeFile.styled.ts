import { borderTheme, getColor } from "@/styles/utils";
import styled from "styled-components";

export const IdeFileWrapper = styled.div`
  width: 100%;
`;

export const ContentWrapper = styled.article`
  background-color: ${getColor("background").medium};
  background-color: ${getColor("background").light};
  padding: 16px 64px;
  width: 100%;
  display: flex;
  color: white;
`;
