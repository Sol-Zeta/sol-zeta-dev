import {
  borderTheme,
  getBorderRadius,
  getColor,
  getFontSize,
} from "@/styles/utils";
import styled from "styled-components";

export const ProjectCardWrapper = styled.div`
  ${borderTheme};
  width: 350px;
  border-radius: ${getBorderRadius()};
  background-color: ${getColor("background").dark};
  overflow: hidden;
`;
export const TextContainer = styled.div`
  padding: 32px 32px 48px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60%;
  & > button {
    justify-self: flex-end;
  }
`;
export const Title = styled.h2`
  font-size: ${getFontSize()};
  color: ${getColor("secondary").gray};
`;
export const Description = styled.p`
  color: ${getColor("secondary").white};
  padding-bottom: 8px;
  max-height: 64px;
`;
export const TagsContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 12px;
`;
export const HeaderContainer = styled.div<{ src: string }>`
  position: relative;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  height: 150px;
  display: flex;
  align-items: end;
  padding: 16px 32px;
  border-bottom: 1px solid ${getColor("line").primary};
`;
