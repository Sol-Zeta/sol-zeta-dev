// 'use client'
import type { Metadata } from "next";
import { LayoutWrapper, PageWrapper } from "./Layout.styled";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import GlobalStyles from "@/styles/GlobalStyles";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sol Zeta Dev",
  description: "Web Development Portfolio",
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <LayoutWrapper>
        <NavBar />
        <PageWrapper>{children}</PageWrapper>
        <Footer />
      </LayoutWrapper>
    </ThemeProvider>
  );
};

export default Layout;
