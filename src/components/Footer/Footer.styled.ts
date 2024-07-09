import { getColor } from "@/styles/utils";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${getColor("line").primary};
  color: ${getColor("secondary").gray};
  div {
    display: flex;
    align-items: center;
    height: 100%;
  }
`;

export const FooterItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 16px;
  border-right: 1px solid ${getColor("line").primary};
  height: 100%;
  &#last { 
    gap: 16px;
    justify-self: end;
    border-right: none;
    border-left: 1px solid ${getColor("line").primary};
  }
`;
