import { borderTheme, getBorderRadius, getColor } from "@/styles/utils";
import styled from "styled-components";

export const GithubCardWrapper = styled.div`
${borderTheme}
  border-radius: ${getBorderRadius()};
  max-width: 500px;
  font-size: 12px;
  background-color: ${getColor('background').medium};
  color: ${getColor('secondary').gray};
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
`;
