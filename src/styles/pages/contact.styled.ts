import { styled } from "styled-components";
import { borderTheme, getBorderRadius, getColor } from "../utils";

export const ContactWrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 64px;
`;

export const FormContainer = styled.form`
  border-radius: ${getBorderRadius()};
  width: 90%;
  max-width: 450px;
  input{
    margin-bottom: 32px;
  }
  button {
    margin-top: 48px;
  }
`;
