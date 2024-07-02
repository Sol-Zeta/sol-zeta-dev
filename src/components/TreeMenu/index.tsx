import React, { FC, useState } from "react";
import {
  TreeMenuBody,
  TreeMenuHeader,
  TreeMenuSection,
  TreeMenuWrapper,
} from "./TreeMenu.styled";
import TreeItem, { TreeItemProps } from "./TreeItem";
import Icon, { Icons } from "../Icon";

export interface TreeMenuItem {
  title: string;
  items: TreeItemProps[];
}

export interface TreeMenuProps {
  items: TreeMenuItem[];
}

const TreeMenu: FC<TreeMenuProps> = ({ items }) => {
  const [openSections, setOpenSections] = useState<number[]>([0]);
  const [activeItem, setActiveItem] = useState<{ [key: number]: number }>({
    0: 0,
  });
  const handleClick = (section: number) => {
    console.log("click", section, openSections);
    if (openSections.some((el) => el === section)) {
      const removedSection = openSections.filter((el) => el !== section);
      setOpenSections(removedSection);
      return;
    }
    setOpenSections([...openSections, section]);
  };

  const handleItemClick = (fatherIndex: number, itemIndex: number) => {
    console.log({ [fatherIndex]: itemIndex });
    setActiveItem({ [fatherIndex]: itemIndex });
  };

  const isOpen = (section: number): boolean =>
    openSections.some((el) => el === section);
  return (
    <TreeMenuWrapper data-testid="TreeMenu">
      {items.map((item, index) => (
        <TreeMenuSection
          isOpen={isOpen(index)}
          onClick={() => handleClick(index)}
        >
          <TreeMenuHeader>
            <Icon className="chevron" icon={Icons.CHEVRON_DOWN} />
            <p>{item.title}</p>
          </TreeMenuHeader>
          {isOpen(index) && (
            <TreeMenuBody>
              {item.items.map((item, itemIndex) => (
                <TreeItem
                  {...item}
                  index={itemIndex}
                  onClick={(value: number) => handleItemClick(index, value)}
                  isActive={itemIndex === activeItem[index]}
                />
              ))}
            </TreeMenuBody>
          )}
        </TreeMenuSection>
      ))}
    </TreeMenuWrapper>
  );
};

export default TreeMenu;
