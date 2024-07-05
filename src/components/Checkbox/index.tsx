import React, { ChangeEventHandler, MouseEventHandler, useState } from "react";
import {
  CheckboxWrapper,
  HiddenCheckbox,
  StyledCheckbox,
  CheckboxLabel,
} from "./Checkbox.styled";

interface CheckboxProps {
  checked: boolean;
  onChange: (isChecked: boolean, label?: string) => void;
  label?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = (e: any) => {
    console.log({ e });
    e.stopPropagation();
    setIsChecked(!isChecked);
    onChange(isChecked, label);
  };

  return (
    <CheckboxWrapper>
      {/* <HiddenCheckbox checked={isChecked} onChange={handleCheckboxChange} /> */}
      <CheckboxLabel
        className={isChecked ? "checked" : ""}
        onClick={handleCheckboxChange}
      >
        <StyledCheckbox checked={isChecked} />
        {label}
      </CheckboxLabel>
    </CheckboxWrapper>
  );
};

export default Checkbox;
