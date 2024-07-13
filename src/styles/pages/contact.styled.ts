import { styled } from "styled-components";
import {
  getBreakpoint,
} from "../utils";

export const ContactWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 16px 32px;
  width: 100%;
  height: 100%;
  & div {
    align-self: flex-start;
  }
  @media (min-width: ${getBreakpoint("sm")}) {
    max-width: 400px;
  }
  @media (min-width: ${getBreakpoint("md")}) {
    gap: 16px;
    padding: 24px 0;
    max-width: 450px;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  button {
    align-self: end;
    margin-top: 16px;
  }
  @media (min-width: ${getBreakpoint("md")}) {
    gap: 24px;
    button {
      margin-top: 32px;
    }
  }
`;
