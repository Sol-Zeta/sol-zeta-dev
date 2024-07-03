import React, { useState } from "react";
import {
  ContentContainer,
  FileTab,
  LayoutWrapper,
  LeftContainer,
  RightContainer,
  TabsContainer,
} from "./IdeLayout.styled";
import TreeMenu, { TreeMenuItem } from "../TreeMenu";
import IdeFile from "./IdeFile";
import Icon, { Icons } from "../Icon";
import LineNumbers from "./LineNumbers";
import { useHeight } from "@/context/HeightContext";

export interface LeftContent {
  id: string;
  title: string;
  component: React.ReactNode;
}

export interface IdeLayoutProps {
  children: React.ReactNode;
  menuItems?: TreeMenuItem[];
  leftContent: LeftContent[];
}

export const IdeLayout: React.FC<IdeLayoutProps> = ({
  menuItems,
  children,
  leftContent,
}) => {
  const { height } = useHeight();
  const [selectedFiles, setSelectedFiles] = useState<string[]>([
    leftContent[0].id,
  ]);
  const [selectedTab, setSelectedTab] = useState<string>(leftContent[0].id);
  const handleMenuClick = (fileName: string) => {
    setSelectedTab(fileName);
    if (selectedFiles.some((name) => name === fileName)) {
      return;
    }
    setSelectedFiles([...selectedFiles, fileName]);
  };
  const handleCloseTab = (e: React.MouseEvent, tabId: string) => {
    e.stopPropagation();
    const newSelectedFiles = selectedFiles.filter((id) => id !== tabId);
    setSelectedFiles(newSelectedFiles);
  };
  return (
    <LayoutWrapper>
      <TreeMenu items={menuItems || []} onClickItem={handleMenuClick} />
      <ContentContainer>
        <LeftContainer>
          <TabsContainer>
            {selectedFiles.map((tabId: string) => (
              <FileTab
                onClick={() => setSelectedTab(tabId)}
                isActive={selectedTab === tabId}
              >
                {leftContent.find((item) => item.id === tabId)?.title}
                <Icon
                  icon={Icons.CLOSE}
                  onClick={(e) => handleCloseTab(e, tabId)}
                />
              </FileTab>
            ))}
          </TabsContainer>
          <LineNumbers height={height} />
          <IdeFile {...leftContent.find((item) => item.id === selectedTab)} />
          {/* {leftContent} */}
          {/* {children} */}
        </LeftContainer>
        <RightContainer>right</RightContainer>
      </ContentContainer>
    </LayoutWrapper>
  );
};

export default IdeLayout;
