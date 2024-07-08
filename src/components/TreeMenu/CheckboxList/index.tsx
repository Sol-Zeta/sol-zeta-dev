import React, { FC } from "react";
import { CheckboxListWrapper } from "./CheckboxList.styled";
import Checkbox, { CheckboxProps } from "@/components/Checkbox";
import Button from "@/components/Button";

export interface CheckboxItem extends CheckboxProps {
  title: string
}

export interface CheckboxListProps {
  items: CheckboxItem[];
  onClick?: (isChecked?: boolean, itemValue?: string) => void;
  showControls?: boolean;
}

const CheckboxList: FC<CheckboxListProps> = ({ items, onClick, showControls = false }) => {
  console.log({ showControls })
  const handleClick = (isChecked?: boolean, label = '') => {
    console.log({ isChecked, label })
    onClick?.(isChecked, label);
  };
  return (
    <CheckboxListWrapper data-testid="CheckboxList">
      <Button iconPosition={"BEFORE"} onClick={() =>{}}>
        Select All
      </Button>
      {items.map((item) => (
        <Checkbox
          label={item.title}
          onChange={handleClick}
          icon={item.icon}
        />))}
    </CheckboxListWrapper>
  );
};

export default CheckboxList;
