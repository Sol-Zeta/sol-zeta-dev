import React from "react";
import { LayoutWrapper } from "./IdeLayour.styled";
import TreeMenu, { TreeMenuItem } from "../TreeMenu";

interface LayourProps {
  children: React.ReactNode;
  menuItems?: TreeMenuItem[];
}

export const Layout: React.FC<LayourProps> = ({ menuItems, children }) => {
  return (
    <LayoutWrapper>
      <TreeMenu items={menuItems || []} />
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
