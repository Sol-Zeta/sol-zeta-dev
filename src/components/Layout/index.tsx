// 'use client'
import type { Metadata } from "next";
import {
  LayoutContainer,
  LayoutWrapper,
  PageWrapper,
  MobileHeader,
} from "./Layout.styled";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import GlobalStyles from "@/styles/GlobalStyles";
import NavBar, { MobileNavBar } from "@/components/NavBar";
import Footer from "@/components/Footer";
import { HeightProvider } from "@/context/HeightContext";
import { useEffect } from "react";
import { ModalProvider } from "@/context/ModalContext";

export const metadata: Metadata = {
  title: "Sol Zeta Dev",
  description: "Web Development Portfolio",
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // const enterFullscreen = () => {
  //   const elem = document.documentElement;
  //   if (elem.requestFullscreen) {
  //     elem.requestFullscreen().catch((err) => {
  //       console.log(
  //         `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
  //       );
  //     });
  //   }
  // };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerHeight > window.innerWidth) {
        // Landscape orientation
        document.documentElement.style.setProperty(
          "--vh",
          `${window.innerHeight * 0.01}px`
        );
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <HeightProvider>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <GlobalStyles />
          <LayoutContainer>
            <LayoutWrapper>
              <NavBar />
              <MobileHeader>soledad-pattoglio</MobileHeader>
              <PageWrapper>{children}</PageWrapper>
              <Footer />
              <MobileNavBar />
            </LayoutWrapper>
          </LayoutContainer>
        </ModalProvider>
      </ThemeProvider>
    </HeightProvider>
  );
};

export default Layout;
