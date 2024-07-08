import { IconChildren } from "@/components/Icon/utils";
import Icon from "../Icon";
import { ButtonWrapper } from "./Button.styled";
import { ReactNode } from "react";

export enum ButtonVariants {
  LINK = 'LINK',
  OUTLINED = 'OUTLINED',
  SOLID = 'SOLID',
}

export enum IconPositions {
  BEFORE = 'BEFORE',
  AFTER = 'AFTER',
}

export interface ButtonProps {
  icon?: keyof typeof IconChildren;
  iconPosition: keyof typeof IconPositions;
  children?: ReactNode;
  onClick: () => void;
  variant?: keyof typeof ButtonVariants;
}


const Button: React.FC<ButtonProps> = ({ icon, iconPosition = IconPositions.BEFORE, children, onClick, variant = ButtonVariants.SOLID }) => {

  return (
    <ButtonWrapper 
      onClick={onClick} 
      iconPosition={iconPosition} 
      variant={variant}
    >
      {icon ? (
        <Icon icon={icon} />
      ) : null}
      {children}
    </ButtonWrapper>
  )
}

export default Button