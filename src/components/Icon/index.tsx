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

  //@ts-ignore
  const SelectedIcon = () => IconChildren[icon] || <p>no icon</p>

  return (
    <IconWrapper
      data-testid="Icon"
      href={href || "#"}
      className={`${className} ${isButton ? 'isButton' : ''}`}
      onClick={onClick}
      width={width}
      height={height}
    >
      <SelectedIcon />
    </IconWrapper>
  );
}



export default Icon;
