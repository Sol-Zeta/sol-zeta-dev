import React, { FC } from "react";
import { IconWrapper } from "./Icon.styled";
import { IconChildren, IconProps } from "./utils";
export { Icons } from "./utils";


const Icon: FC<IconProps> = ({
  icon,
  width = 20,
  height = 20,
  href,
  isButton = true,
  className,
  onClick,
}) => {

  const SelectedIcon = () => IconChildren[icon] || <p>no icon</p>

  return (
    <IconWrapper
      data-testid="Icon"
      isButton={isButton}
      href={href || "#"}
      className={className}
      onClick={onClick}
      width={width}
      height={height}
    >
      <SelectedIcon />
    </IconWrapper>
  );
}



export default Icon;
