import { getColor } from "@/styles/utils";
import styled from "styled-components";

export const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  & .searchInput {
    border-bottom: 1px solid ${getColor('accent').green};
    & svg {
        fill: ${getColor('accent').green};
    }
  }
`;
