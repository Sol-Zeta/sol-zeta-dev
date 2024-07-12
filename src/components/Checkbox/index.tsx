import React, {
  ChangeEvent,
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
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
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  icon: iconKey,
  className,
}) => {
  const [isChecked, setIsChecked] = useState(checked);
  const hiddenCheckboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleLabelClick = (e: any) => {
    e.stopPropagation();
    if (!hiddenCheckboxRef.current) return;
    hiddenCheckboxRef.current.click();
  };
  const handleCheckboxChange = (e: any) => {
    e.stopPropagation();
    setIsChecked(e.target.checked);
    onChange(e.target.checked, label);
  };

  return (
    <CheckboxWrapper className={className}>
      <CheckboxLabel
        className={isChecked ? "checked" : ""}
        onClick={handleLabelClick}
      >
        <HiddenCheckbox checked={isChecked} onChange={handleCheckboxChange} />
        <StyledCheckbox checked={isChecked} />
        <LabelContainer>
          {iconKey && (
            <Icon icon={Icons[iconKey] as keyof typeof IconChildren} />
          )}
          <p>{label}</p>
        </LabelContainer>
      </CheckboxLabel>
    </CheckboxWrapper>
  );
};

export default Checkbox;
