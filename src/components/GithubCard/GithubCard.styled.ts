import { borderTheme, getBorderRadius, getBreakpoint, getColor } from "@/styles/utils";
import styled from "styled-components";

export const GithubCardWrapper = styled.div`
${borderTheme}
  border-radius: ${getBorderRadius()};
  font-size: 12px;
  background-color: ${getColor('background').medium};
  color: ${getColor('secondary').gray};
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
  max-width: 100%;
  @media (min-width: ${getBreakpoint("md")}) {
      max-width: 500px;
  }
`;
