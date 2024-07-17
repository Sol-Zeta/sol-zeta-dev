import { getColor } from "@/styles/utils";
import Link from "next/link";
import styled from "styled-components";

export const UserHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  padding-bottom: 0;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Description = styled.p`
  margin-top: 12px;
  font-style: italic;
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
  &:hover {
    color: ${getColor("secondary").green};
    svg {
      fill: ${getColor("secondary").green};
    }
  }
`;
