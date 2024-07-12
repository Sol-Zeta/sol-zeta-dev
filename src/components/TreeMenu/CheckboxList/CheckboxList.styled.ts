import { getColor } from "@/styles/utils";
import styled from "styled-components";

export const CheckboxListWrapper = styled.div`
  padding: 12px 0 16px 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
`;

export const ControlsContainer = styled.div`
  padding: 0 48px 24px 0;
  border-bottom: 2px solid ${getColor("line").primary};
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  & > div.checkboxFilter > label {
    color: ${getColor("secondary").white};
  }
`;
export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;
  overflow-y: scroll;
  & > div.checkboxFilter > label {
    color: ${getColor("secondary").white};
  }
`;
