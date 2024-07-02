import { createGlobalStyle } from "styled-components";
import { colors } from "./theme";
import { getTheme } from "./utils";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Fira';
    src: url('@/assets/fonts/firacode/firacode-medium.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  ::selection {
    background: ${colors.orange}; /* Background color of the selected text */
    color: white; /* Color of the text */
  } 

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Fira', monospace;
    background-color: ${colors.neutralDark};
    color: ${colors.white};
    margin: 0;
    & > div { 
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100vh;
    }
  }

  h1, h2, p {
    margin: 0;
    font-weight: normal;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  p, span {
    line-height: 1.5rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
