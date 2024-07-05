import React, { FC, useState } from "react";
import {
  TreeMenuBody,
  TreeMenuHeader,
  TreeMenuSection,
  TreeMenuWrapper,
} from "./TreeMenu.styled";
import TreeItem, { TreeItemProps } from "./TreeItem";
import Icon, { Icons } from "../Icon";
import Checkbox from "../Checkbox";

export interface TreeActiveItem {
  [key: number]: number | undefined;
}

export interface TreeMenuItem {
  title: string;
  items: TreeItemProps[];
  isCheckboxList?: boolean;
}

export interface TreeMenuProps {
  items: TreeMenuItem[];
  onClickItem: (item: string) => void;
  activeItem: TreeActiveItem;
  getActiveItem: (item: TreeActiveItem) => void;
}

const TreeMenu: FC<TreeMenuProps> = ({
  items,
  onClickItem,
  activeItem,
  getActiveItem,
}) => {
  const [openSections, setOpenSections] = useState<number[]>([0]);
  const handleClick = (section: number) => {
    if (openSections.some((el) => el === section)) {
      const removedSection = openSections.filter((el) => el !== section);
      setOpenSections(removedSection);
      return;
    }
    setOpenSections([...openSections, section]);
  };

  const handleItemClick = (
    fatherIndex: number,
    itemIndex: number,
    itemName: string
  ) => {
    getActiveItem({ [fatherIndex]: itemIndex });

    onClickItem(itemName);
  };

  const handleCheckboxChange = (isChecked: boolean, itemTitle?: string) => {
    console.log("check", { isChecked, itemTitle });
  };

  const isOpen = (section: number): boolean =>
    openSections.some((el) => el === section);
  return (
    <TreeMenuWrapper data-testid="TreeMenu">
      {items.map((item, index) => (
        <TreeMenuSection
          isOpen={isOpen(index)}
          onClick={() => handleClick(index)}
          key={item.title}
        >
          <TreeMenuHeader>
            <Icon className="chevron" icon={Icons.CHEVRON_DOWN} />
            <p>{item.title}</p>
          </TreeMenuHeader>
          {isOpen(index) && (
            <TreeMenuBody>
              {item.items.map((subItem, subItemIndex) => (
                <>
                  {item.isCheckboxList ? (
                    <Checkbox
                      label={subItem.title}
                      checked={false}
                      onChange={handleCheckboxChange}
                    />
                  ) : (
                    <TreeItem
                      key={`tree-item-${subItem.title}`}
                      {...subItem}
                      index={subItemIndex}
                      onClick={(value: number) =>
                        handleItemClick(index, value, subItem.title)
                      }
                      isActive={subItemIndex === activeItem[index]}
                    />
                  )}
                </>
              ))}
            </TreeMenuBody>
          )}
        </TreeMenuSection>
      ))}
    </TreeMenuWrapper>
  );
};

export default TreeMenu;
