import { getColor, getFontSize } from "@/styles/utils";
import { css, styled } from "styled-components";

const lineTreeColor = css`
  color: ${getColor("secondary").blue};
`;

export const TreeContainer = styled.div`
  padding: 48px 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Section = styled.div<React.HTMLAttributes<HTMLDivElement>>`
  margin-bottom: 20px;
  position: relative;

  & p {
    margin: 0;
    padding: 0;
    padding-left: 90px;
  }
  & p::before {
    content: "├-";
    position: absolute;
    left: 60px;
    ${lineTreeColor}
  }
  & p.last::before {
    content: "└-";
    position: absolute;
    left: 60px;
    ${lineTreeColor}
  }
`;

export const Title = styled.h2`
  text-transform: capitalize;
  margin-bottom: 10px;
  padding-left: 5px;
  font-size: ${getFontSize("lg")};
  color: ${getColor("accent").green};
  &::before {
    content: "__ ";
  }
`;

export const TitleAttached = styled.span`
  font-size: ${getFontSize("md")};
  color: ${getColor('accent').green};
  &::before {
    content: " ==> ";
    ${lineTreeColor};
    font-size: ${getFontSize("sm")};
    vertical-align: middle; 
  }
`;

export const Subtitle = styled.p`
  text-transform: capitalize;
  margin-bottom: 10px;
  position: relative;
`;

export const Highlighted = styled.span`
  color: ${getColor("accent").salmon};
`;

export const List = styled.ul`
  list-style-type: none;
  padding-left: 64px;
`;

export const ListItem = styled.li<React.HTMLAttributes<HTMLLIElement>>`
  margin-bottom: 5px;
  padding-left: 70px;
  font-weight: 200;
  &::before {
    content: "├-";
    position: absolute;
    left: 110px;
    ${lineTreeColor}
  }
  &.last::before {
    content: "└-";
    position: absolute;
    left: 110px;
  }
  &::after {
    content: "|";
    position: absolute;
    left: 60px;
    ${lineTreeColor}
  }
  &.noLine::after {
    content: "";
    position: absolute;
    left: 60px;
  }
`;
