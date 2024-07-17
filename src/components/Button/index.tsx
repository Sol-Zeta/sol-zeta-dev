import { IconChildren, Icons } from "@/components/Icon/utils";
import Icon from "../Icon";
import { ButtonWrapper } from "./Button.styled";
import { ReactNode } from "react";

export enum ButtonVariants {
  LINK = 'LINK',
  OUTLINED = 'OUTLINED',
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  SOFT = 'SOFT',
}

export enum IconPositions {
  BEFORE = 'BEFORE',
  AFTER = 'AFTER',
}

export interface ButtonProps {
  icon?: keyof typeof Icons;
  iconPosition?: keyof typeof IconPositions;
  children?: ReactNode;
  onClick: () => void;
  variant?: keyof typeof ButtonVariants;
}


const Button: React.FC<ButtonProps> = ({ icon, iconPosition = IconPositions.BEFORE, children, onClick, variant = ButtonVariants.PRIMARY }) => {

  return (
    <ButtonWrapper 
      onClick={onClick}
      className={`${variant.toLowerCase()} ${iconPosition.toLocaleLowerCase()}`}
    >
      {icon ? (
        <Icon icon={icon} />
      ) : null}
      {children}
    </ButtonWrapper>
  )
}

export default Button