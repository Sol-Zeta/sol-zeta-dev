import { createGlobalStyle } from "styled-components";
import { colors } from "./theme";
import { getBreakpoint, getTheme } from "./utils";

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

  ::-webkit-scrollbar {
    width: 20px;
  }
  
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${colors.gray};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 1px solid ${colors.green};
  }

  html {
  overflow-y: scroll; /* Ensures the page is scrollable */
  overscroll-behavior-y: none; /* Prevents elastic scroll on some browsers */
}

html, body, #__next {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}


  body {
    font-family: 'Fira', monospace;
    background-color: ${colors.neutralDark};
    color: ${colors.white};
    margin: 0;
    padding: 0;
    /* max-width: 100vw;
    height: 100vh; */
    & > div { 
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 100vh;
    }
    @media (min-width: ${getBreakpoint("md")}) {
      & > div { 
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100vh;
    }
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
    &:active {
      outline: none;
    }
    &:focus {
      outline: none;
    }
  }

  button {
    box-shadow: unset;
    border: unset;
  }
`;

export default GlobalStyles;
