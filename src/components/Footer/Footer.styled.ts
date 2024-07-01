import { getColor } from "@/styles/utils";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${getColor("line").primary};
  color: ${getColor("secondary").gray};
  div {
    display: flex;
  }
`;

export const FooterItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 16px;
  border-right: 1px solid ${getColor("line").primary};
  &:last-child { 
    gap: 16px;
    justify-self: end;
    border-right: none;
    border-left: 1px solid ${getColor("line").primary};
  }
`;
