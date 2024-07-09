import React, { FC, useEffect, useState } from "react";
import { SearchInputWrapper } from "./SearchInput.styled";
import Input from "@/components/Input";
import Icon, { Icons } from "@/components/Icon";
import useDebounce from "../../hooks/useDebounce";

interface SearchInputProps {
  placeholder?: string;
  getSearchTerm?: (term?: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({ placeholder, getSearchTerm }) => {
  const [searchTerm, setSearchTerm] = useState<string | undefined>("");
  const debouncedValue = useDebounce(searchTerm);

  const handleInputChange = (value?: string) => {
    setSearchTerm(value);
  };

  useEffect(() => {
    getSearchTerm?.(debouncedValue);
  }, [debouncedValue]);

  return (
    <SearchInputWrapper data-testid="Input">
      <Input
        icon={Icons.SEARCH}
        className={"searchInput"}
        placeholder={placeholder}
        onChange={handleInputChange}
        clean={true}
      />
    </SearchInputWrapper>
  );
};

export default SearchInput;
