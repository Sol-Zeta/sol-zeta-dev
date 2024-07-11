import { getBreakpoint, getColor } from "@/styles/utils";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: none;
  width: 100%;
  height: 64px;
  align-items: center;
  border-top: 1px solid ${getColor("line").primary};
  color: ${getColor("secondary").gray};
  @media (min-width: ${getBreakpoint("md")}) {
    display: flex;
    min-width: 100%;
    justify-content: space-between;
    div {
      display: flex;
      align-items: center;
      height: 100%;
    }
  }
`;

export const FooterItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
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
