import React, { ChangeEventHandler, MouseEventHandler, useState } from "react";
import {
  CheckboxWrapper,
  HiddenCheckbox,
  StyledCheckbox,
  CheckboxLabel,
  LabelContainer,
} from "./Checkbox.styled";
import Icon, { Icons } from "@/components/Icon";
import { IconChildren } from "../Icon/utils";

export interface CheckboxProps {
  checked?: boolean;
  onChange: (isChecked?: boolean, label?: string) => void;
  label?: string;
  icon?: keyof typeof Icons;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label, icon: iconKey }) => {
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
        <LabelContainer>
          {iconKey && <Icon icon={Icons[iconKey] as keyof typeof IconChildren} />}
          {label}
        </LabelContainer>
      </CheckboxLabel>
    </CheckboxWrapper>
  );
};

export default Checkbox;
