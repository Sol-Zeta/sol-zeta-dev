import "styled-components";

declare module "styled-components" {
  export interface Colors {
    [key: string]: string;
  }
  export interface DefaultTheme {
    breakpoints: {
      [key: string]: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    colors: {
      [key: string]: Colors | string;
      background: Colors;
      secondary: Colors;
      accent: Colors;
      icon: string;
      line: Colors;
      gradient: Colors;
      text: Colors;
      code: Colors;
    };
    fonts: {
      primary: string;
    };
  }
}
