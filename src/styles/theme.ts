import { DefaultTheme } from "styled-components";

export const colors = {
  gray: "#99A9B7",
  buttonGray: "#1C2B3A",
  buttonLightGray: "#263B50",
  green: "#43D9AD",
  lightGreen: "#3C9D93",
  blue: "#8A99FF",
  black: "#000000",
  white: "#FFFFFF",
  white70: "#FFFFFFB3",
  orange: "#FEA55F",
  lightOrange: "#FFB982",
  greenCode: '#dcdd9a',
  salmon: "#E99287",
  plum: "#C98BDF",
  neutralDark: "#01080E",
  neutralMedium: "#011221",
  neutralLight: "#011627",
  neutralLighter: "#1E2D3D",
  yellow: "#F8EA91",
  lightBlue: "#61DBFB",
};

const theme: DefaultTheme = {
  breakpoints: {
    xs: '575px',
    sm: '768px',
    md: '1025px',
    lg: '1200px',
    xl: '1600px',
  },
  colors: {
    background: {
      dark: colors.neutralDark,
      medium: colors.neutralMedium,
      light: colors.neutralLight,
      lighter: colors.neutralLighter,
    },
    secondary: {
      gray: colors.gray,
      green: colors.green,
      blue: colors.blue,
      black: colors.black,
      white: colors.white,
      white70: colors.white70,
    },
    accent: {
      orange: colors.orange,
      green: colors.lightGreen,
      salmon: colors.salmon,
      plum: colors.plum,
    },
    button: {
      primary: colors.green,
      primaryHover: colors.lightGreen,
      secondary: colors.buttonGray,
      secondaryHover: colors.buttonLightGray,
    },
    text: {
      primary: colors.white,
      secondary: colors.black,
      gray: colors.buttonLightGray
    },
    code: {
      comments: colors.gray,
      key: colors.blue,
      variable: colors.plum,
      value: colors.salmon,
      number: colors.greenCode,
      operator: colors.white, 
      function: colors.yellow
    },
    icon: colors.gray,
    line: {
      primary: colors.neutralLighter,
    },
    gradient: {
      blue: colors.blue,
      green: colors.lightGreen,
    },
  },
  fonts: {
    primary: "'Fira', monospace",
  },
  fontSize: {
    xxl: '2rem',
    xl: '1.5rem',
    lg: '1.25rem',
    md: '1rem',
    sm: '0.75rem',
    xs: '0.5rem',
  },
  borderRadius: {
    lg: '',
    md: '8px',
    sm: '',
  },
  spacing: {
    xl: '70px',
    lg: '70px',
    md: '70px',
    sm: '70px',
  }
};

export default theme;
