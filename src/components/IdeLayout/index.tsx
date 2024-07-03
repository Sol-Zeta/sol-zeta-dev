import React, { useState } from "react";
import {
  ContentContainer,
  FileTab,
  LayoutWrapper,
  LeftContainer,
  RightContainer,
  TabsContainer,
} from "./IdeLayout.styled";
import TreeMenu, { TreeActiveItem, TreeMenuItem } from "../TreeMenu";
import IdeFile from "./IdeFile";
import Icon, { Icons } from "../Icon";
import LineNumbers from "./LineNumbers";
import { useHeight } from "@/context/HeightContext";
import NoFileSelected from "./NoFileSelected";

export interface LeftContent {
  id: string;
  title: string;
  component: React.ReactNode;
}

export interface IdeLayoutProps {
  children?: React.ReactNode;
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
  const [selectedMenuItem, setSelectedMenuItem] = useState<TreeActiveItem>({
    0: 0,
  });
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
    const newSelectedTab = newSelectedFiles.length
      ? newSelectedFiles[newSelectedFiles.length - 1]
      : "";
    const newSelectedMenuItem: TreeActiveItem = {};
    menuItems?.forEach((item, fatherIndex) => {
      item.items.forEach((child, childIndex) => {
        if (child.title === newSelectedTab) {
          newSelectedMenuItem[fatherIndex] = childIndex;
        }
      });
    });
    setSelectedFiles(newSelectedFiles);
    setSelectedTab(newSelectedTab);
    setSelectedMenuItem(newSelectedMenuItem);
  };
  const handleMenuItem = (item: TreeActiveItem) => setSelectedMenuItem(item);
  console.log({ selectedFiles, selectedTab });
  return (
    <LayoutWrapper>
      <TreeMenu
        items={menuItems || []}
        onClickItem={handleMenuClick}
        activeItem={selectedMenuItem}
        getActiveItem={handleMenuItem}
      />
      <ContentContainer>
        <LeftContainer>
          <TabsContainer>
            {selectedFiles.map((tabId: string) => (
              <FileTab
                onClick={() => setSelectedTab(tabId)}
                isActive={selectedTab === tabId}
                key={tabId}
              >
                {leftContent.find((item) => item.id === tabId)?.title}
                <Icon
                  icon={Icons.CLOSE}
                  onClick={(e) => handleCloseTab(e, tabId)}
                />
              </FileTab>
            ))}
          </TabsContainer>
          {selectedFiles.length ? <LineNumbers height={height} /> : null}
          {selectedFiles.length ? (
            <IdeFile {...leftContent.find((item) => item.id === selectedTab)} />
          ) : (
            <NoFileSelected />
          )}
          {/* {leftContent} */}
          {/* {children} */}
        </LeftContainer>
        <RightContainer>right</RightContainer>
      </ContentContainer>
    </LayoutWrapper>
  );
};

export default IdeLayout;
