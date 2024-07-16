import { borderTheme, getBorderRadius, getColor } from "@/styles/utils";
import styled from "styled-components";

export const NoFileSelectedWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: calc(100% - 350px);
  height: 100%;
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  text-align: center;
  width: 300px;
  ${borderTheme}
  border-radius: ${getBorderRadius()};
  background-color: ${getColor("background").light};
  color: ${getColor("code").comments};
  padding: 32px;
  line-height: 1.5rem;
  .directoryIcon {
    svg {
      fill: ${getColor("accent").plum};
    }
  }
`;
