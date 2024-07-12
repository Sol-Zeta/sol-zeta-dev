import { styled } from "styled-components";
import {
  getBreakpoint,
} from "../utils";

export const ContactWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 16px 32px;
  gap: 32px;
  width: 100%;
  & div {
    align-self: flex-start;
  }
  @media (min-width: ${getBreakpoint("sm")}) {
    max-width: 400px;
  }
  @media (min-width: ${getBreakpoint("md")}) {
    padding: 80px 0;
    max-width: 450px;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  button {
    align-self: end;
    margin-top: 16px;
  }
  @media (min-width: ${getBreakpoint("md")}) {
    gap: 32px;
    button {
      margin-top: 32px;
    }
  }
`;
