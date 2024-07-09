import React, {
  FC,
  LegacyRef,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  InputWrapper,
  InputContainer,
  StyledInput,
  Label,
} from "./Input.styled";
import Icon, { Icons } from "../Icon";
import { IconChildren } from "../Icon/utils";

interface InputProps {
  type?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  icon?: keyof typeof IconChildren;
  onChange?: (e: any) => void;
  clean?: boolean;
  value?: string;
}

const Input: FC<InputProps> = ({
  type,
  name,
  required,
  label,
  placeholder,
  className,
  icon,
  onChange,
  clean,
  value,
}) => {
  const [inputValue, setInputValue] = useState<string | undefined>(value);

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };
  const handleCleanInput = () => setInputValue("");

  useEffect(() => {
    if (!onChange) return;
    onChange(inputValue);
  }, [inputValue]);

  return (
    <InputWrapper data-testid="Input" className={className}>
      <Label htmlFor="name">{label}</Label>
      <InputContainer>
        {icon && <Icon icon={Icons.SEARCH} isButton={false} />}
        <StyledInput
          value={inputValue}
          type={type || "text"}
          id={name}
          name={name}
          required={required}
          placeholder={placeholder}
          onChange={handleChange}
        />
        {clean && inputValue && (
          <Icon icon={Icons.CLOSE} width={16} onClick={handleCleanInput} />
        )}
      </InputContainer>
    </InputWrapper>
  );
};
export default Input;
