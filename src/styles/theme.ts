import { DefaultTheme } from "styled-components";

export const colors = {
  gray: "#607B96",
  green: "#3C9D93",
  blue: "#4D5BCE",
  white: "#FFFFFF",
  orange: "#FEA55F",
  lightGreen: "#43D9AD",
  greenCode: '#dcdd9a',
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
      comments: colors.gray,
      key: colors.blue,
      variable: colors.plum,
      value: colors.salmon,
      number: colors.greenCode,
      operator: colors.white
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
    xl: '2rem',
    lg: '1.5rem',
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
