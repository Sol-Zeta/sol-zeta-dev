import { getBreakpoint, getColor } from "@/styles/utils";
import Link from "next/link";
import styled from "styled-components";

export const UserHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  padding-bottom: 0;
  @media (min-width: ${getBreakpoint("md")}) {
    padding: 32px;
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Description = styled.p`
  margin-top: 12px;
  font-style: italic;
  overflow: hidden;
  white-space: wrap;
  text-overflow: ellipsis;
  @media (min-width: ${getBreakpoint("md")}) {
    max-width: 500px;
    overflow: inherit;
    text-overflow: inherit;
  }
`;
export const AvatarContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 16px;
`;
export const Name = styled.h3`
  color: ${getColor("secondary").blue};
  &::before {
    content: "@";
  }
`;
export const CreationDate = styled.p``;
export const Section = styled.div`
  display: flex;
  justify-content: end;
`;
export const HeaderLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-left: 16px;
  p {
      display: none;
    }
  &:hover {
    color: ${getColor("secondary").green};
    svg {
      fill: ${getColor("secondary").green};
    }
  }
  @media (min-width: ${getBreakpoint("md")}) {
    p {
      display: block;
    }
  }
`;
