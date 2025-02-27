import React, { FC, useState } from "react";
import {
  TreeMenuBody,
  TreeMenuHeader,
  TreeMenuSection,
  TreeMenuWrapper,
} from "./TreeMenu.styled";
import TreeItem, { TreeItemProps } from "./TreeItem";
import Icon, { Icons } from "../Icon";
import Checkbox, { CheckboxProps } from "../Checkbox";
import CheckboxList, { CheckboxItem } from "./CheckboxList";

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

  const handleCheckboxChange = (isChecked?: boolean, itemTitle?: string) => {
  };

  const isOpen = (section: number): boolean =>
    openSections.some((el) => el === section);
  return (
    <TreeMenuWrapper data-testid="TreeMenu">
      {items.map((item, index) => (
        <TreeMenuSection isOpen={isOpen(index)} key={item.title}>
          <TreeMenuHeader onClick={() => handleClick(index)}>
            <Icon className="chevron" icon={Icons.CHEVRON_DOWN} />
            <p>{item.title}</p>
          </TreeMenuHeader>
          {isOpen(index) && (
            <TreeMenuBody>
              {item.isCheckboxList ? (
                <CheckboxList
                  items={item.items as unknown as CheckboxItem[]}
                  onClick={handleCheckboxChange}
                />
              ) : (
                <>
                  {item.items.map((subItem, subItemIndex) => (
                    <TreeItem
                      key={`tree-item-${subItem.title}`}
                      {...subItem}
                      index={subItemIndex}
                      onClick={(value: number) =>
                        handleItemClick(index, value, subItem.title)
                      }
                      isActive={subItemIndex === activeItem[index]}
                    />
                  ))}
                </>
              )}
              {/* {item.items.map((subItem, subItemIndex) => (
                <>
                  {item.isCheckboxList ? (
                    <Checkbox
                      label={subItem.title}
                      checked={false}
                      onChange={handleCheckboxChange}
                      icon={subItem.icon}
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
              ))} */}
            </TreeMenuBody>
          )}
        </TreeMenuSection>
      ))}
    </TreeMenuWrapper>
  );
};

export default TreeMenu;
