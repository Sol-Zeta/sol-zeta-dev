// 'use client'
import type { Metadata } from "next";
import { LayoutContainer, LayoutWrapper, NonDesktopMessage, PageWrapper, MobileHeader } from "./Layout.styled";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import GlobalStyles from "@/styles/GlobalStyles";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { HeightProvider } from "@/context/HeightContext";

export const metadata: Metadata = {
  title: "Sol Zeta Dev",
  description: "Web Development Portfolio",
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <HeightProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <LayoutContainer>
        {/* <NonDesktopMessage>
          Please access to the app from a desktop device
        </NonDesktopMessage> */}
        <LayoutWrapper>
          <NavBar />
          <MobileHeader>soledad-pattoglio</MobileHeader>
          <PageWrapper>{children}</PageWrapper>
          {/* <Footer /> */}
        </LayoutWrapper>
        </LayoutContainer>
      </ThemeProvider>
    </HeightProvider>
  );
};

export default Layout;
