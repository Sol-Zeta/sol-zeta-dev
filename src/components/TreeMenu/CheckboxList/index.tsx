import React, { FC, useState } from "react";
import { ControlsContainer, CheckboxListWrapper, ListContainer } from "./CheckboxList.styled";
import Checkbox, { CheckboxProps } from "@/components/Checkbox";
import SearchInput from "@/components/SearchInput";

export interface CheckboxItem extends CheckboxProps {
  title: string;
  isChecked?: boolean;
}

export interface CheckboxListProps {
  items: CheckboxItem[];
  onClick?: (isChecked?: boolean, itemValue?: string) => void;
  showControls?: boolean;
}

const CheckboxList: FC<CheckboxListProps> = ({
  items,
  onClick,
  showControls = false,
}) => {
  const [itemsToShow, setItemsToShow] = useState<CheckboxItem[]>(items);
  const [filteredItems, setFilteredItems] = useState<CheckboxItem[]>(items);
  const [isAllSelected, setIsAllSelected] = useState<boolean>(false);
  const [filters, setFilters] = useState<string[]>([]);

  const handleClick = (isChecked?: boolean, label = "", key?: string) => {
    switch (key) {
      case "all":
        const itemsChecked = items.map((item) => ({
          ...item,
          isChecked,
        }));
        setItemsToShow(itemsChecked);
        setIsAllSelected(isChecked || false);
        break;
      case "item":
        break;
      default:
        break;
    }
    onClick?.(isChecked, label);
  };

  const handleFilterItems = (filter?: string) => {
    if (!filter) {
      setItemsToShow(items);
      return;
    }
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(filter.toLowerCase())
    );
    setItemsToShow(filteredItems);
  };

  return (
    <CheckboxListWrapper data-testid="CheckboxList">
      <ControlsContainer>
        <SearchInput
          placeholder="Enter a technology"
          getSearchTerm={handleFilterItems}
        />
      </ControlsContainer>
      <ControlsContainer>
        <Checkbox
          className="checkboxFilter"
          label={isAllSelected ? "unselect-all" : "select-all"}
          onChange={(isChecked, label) => handleClick(isChecked, label, "all")}
        />
      </ControlsContainer>
      <ListContainer>
        {itemsToShow.map((item) => (
          <Checkbox
            checked={item.isChecked}
            label={item.title}
            onChange={(isChecked, label) => handleClick(isChecked, label)}
            icon={item.icon}
          />
        ))}
      </ListContainer>
    </CheckboxListWrapper>
  );
};

export default CheckboxList;
