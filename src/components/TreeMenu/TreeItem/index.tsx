import React, { FC } from "react";
import { TreeItemWrapper } from "./TreeItem.styled";
import Icon, { Icons } from "@/components/Icon";

export interface TreeItemProps {
  index: number;
  title: string;
  color?: string;
  icon?: keyof typeof Icons;
  onClick?: (value: number) => void;
  isActive: boolean;
}

const TreeItem: FC<TreeItemProps> = ({ index, title, color, icon, onClick, isActive }: any) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick(index);
  };
  console.log({title, isActive})
  return (
    <TreeItemWrapper data-testid="TreeItem" color={color} onClick={handleClick} isActive={isActive}>
      {icon ? <Icon icon={icon} /> : <Icon icon={Icons.DIRECTORY} />}
      <p>{title}</p>
    </TreeItemWrapper>
  );
};

export default TreeItem;
