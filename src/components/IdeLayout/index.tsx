import React, { useEffect, useState } from "react";
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
import Icon, { Icons } from "@/components/Icon";
import LineNumbers from "./LineNumbers";
import { useHeight } from "@/context/HeightContext";
import NoFileSelected from "./NoFileSelected";

export interface FilesContent {
  showLineNumber?: boolean;
  id: string;
  title: string;
  component: React.ReactNode;
}

export interface IdeLayoutProps {
  children?: React.ReactNode;
  menuItems?: TreeMenuItem[];
  filesContent?: FilesContent[];
  secondaryContent?: any[];
}

export const IdeLayout: React.FC<IdeLayoutProps> = ({
  menuItems,
  children,
  filesContent = [],
  secondaryContent = [],
}) => {
  const { height } = useHeight();
  const [selectedFiles, setSelectedFiles] = useState<string[]>(
    filesContent[0] ? [filesContent[0]?.id] : []
  );
  const [selectedTab, setSelectedTab] = useState<string>(filesContent[0]?.id);
  const [selectedMenuItem, setSelectedMenuItem] = useState<TreeActiveItem>({
    0: 0,
  });
  const [showLineNumber, setShowLineNumber] = useState(
    filesContent[0]?.showLineNumber !== false
  );
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

  useEffect(() => {
    const showNumbers =
      filesContent.find((item) => item.id === selectedTab)?.showLineNumber !==
      false;
    setShowLineNumber(showNumbers);
  }, [selectedTab]);

  const handleMenuItem = (item: TreeActiveItem) => setSelectedMenuItem(item);
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
          {selectedFiles.length > 0 ? (
            <TabsContainer>
              {selectedFiles.map((tabId: string) => (
                <FileTab
                  onClick={() => setSelectedTab(tabId)}
                  key={tabId}
                  className={selectedTab === tabId ? "isActive" : ""}
                >
                  {filesContent.find((item) => item.id === tabId)?.title}
                  <Icon
                    icon={Icons.CLOSE}
                    onClick={(e) => handleCloseTab(e, tabId)}
                  />
                </FileTab>
              ))}
            </TabsContainer>
          ) : null}
          {/* {selectedFiles.length || showLineNumber ? (
                <LineNumbers height={height} />
              ) : null} */}
          {selectedFiles.length ? (
            <IdeFile
              {...filesContent.find((item) => item.id === selectedTab)}
            />
          ) : (
            <NoFileSelected />
          )}
          {children}
        </LeftContainer>
        {/* {!children && <RightContainer></RightContainer>} */}
      </ContentContainer>
    </LayoutWrapper>
  );
};

export default IdeLayout;
