import React, {
  FC,
  useEffect,
  useState,
} from "react";
import {
  InputWrapper,
  InputContainer,
  StyledInput,
  StyledTextarea,
  Label,
} from "./Input.styled";
import Icon, { Icons } from "../Icon";
import { IconChildren } from "../Icon/utils";

export enum InputVariants {
  PRIMARY = "PRIMARY",
  OUTLINED = "OUTLINED",
}

export interface InputProps {
  type?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  icon?: keyof typeof IconChildren;
  onChange?: (e: any) => void;
  clean?: boolean;
  variant?: keyof typeof InputVariants;
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
  variant = InputVariants.OUTLINED,
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
    <InputWrapper data-testid="Input" className={className} variant={variant}>
      <Label htmlFor="name" variant={variant}>
        {label}
      </Label>
      {type === "textarea" ? (
        <InputContainer>
          {icon && <Icon icon={Icons.SEARCH} isButton={false} />}
          <StyledTextarea
            variant={variant}
            value={inputValue}
            type={type || "text"}
            id={name}
            name={name}
            required={required}
            placeholder={placeholder}
            onChange={handleChange}
            rows={10}
          />
          {clean && inputValue && (
            <Icon icon={Icons.CLOSE} width={16} onClick={handleCleanInput} />
          )}
        </InputContainer>
      ) : (
        <InputContainer>
          {icon && <Icon icon={Icons.SEARCH} isButton={false} />}
          <StyledInput
            variant={variant}
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
      )}
    </InputWrapper>
  );
};
export default Input;
