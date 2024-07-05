import { getColor, getFontSize } from "@/styles/utils";
import { css, styled } from "styled-components";

const lineTreeColor = css`
  color: ${getColor("secondary").blue};
`;

export const TreeContainer = styled.div`
  padding-bottom: 24px;
  max-width: 100%;
`;

export const Section = styled.div<React.HTMLAttributes<HTMLDivElement>>`
  margin-bottom: 20px;
  position: relative;
  max-width: 100%;
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

export const TitleContainer = styled.div<React.HTMLAttributes<HTMLDivElement>>`
  max-width: 90%;
`;


export const Title = styled.h2<React.HTMLAttributes<HTMLHeadingElement>>`
  margin-bottom: 10px;
  padding-left: 5px;
  text-transform: capitalize;
  font-size: ${getFontSize("lg")};
  color: ${getColor("accent").green};
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
  &::before {
    content: "+ ";
  }
  &.open::before {
    content: "_ ";
  }
`;

export const TitleAttached = styled.span`
  font-size: ${getFontSize("md")};
  color: ${getColor("accent").green};
  padding-left: 30px;
  max-width: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  &::before {
    content: "└- ";
    ${lineTreeColor};
    font-size: ${getFontSize("sm")};
    vertical-align: middle;
    left: 10px;
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
