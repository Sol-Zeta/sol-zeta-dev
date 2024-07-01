import { DefaultTheme } from "styled-components";

export const colors = {
  gray: "#607B96",
  green: "#3C9D93",
  blue: "#4D5BCE",
  white: "#FFFFFF",
  orange: "#FEA55F",
  lightGreen: "#43D9AD",
  salmon: "#E99287",
  plum: "#C98BDF",
  neutralDark: "#01080E",
  neutralMedium: "#011221",
  neutralLight: "#011627",
  neutralLighter: "#1E2D3D",
};

const theme: DefaultTheme = {
  breakpoints: {
    xs: '575px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
    xl: '1600px',
  },
  colors: {
    background: {
      dark: colors.neutralDark,
      medium: colors.neutralMedium,
      light: colors.neutralLight,
    },
    secondary: {
      gray: colors.gray,
      green: colors.green,
      blue: colors.blue,
      white: colors.white,
    },
    accent: {
      orange: colors.orange,
      green: colors.lightGreen,
      salmon: colors.salmon,
      plum: colors.plum,
    },
    text: {
      primary: colors.white,
      secondary: colors.blue,
    },
    code: {
      key: colors.blue,
      variable: colors.green,
      value: colors.salmon,
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
