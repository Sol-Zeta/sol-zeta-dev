import React, { FC } from "react";
import {
  MessageContainer,
  NoFileSelectedWrapper,
} from "./NoFileSelected.styled";
import Icon, { Icons } from "@/components/Icon";

interface NoFileSelectedProps {}

const NoFileSelected: FC<NoFileSelectedProps> = () => (
  <NoFileSelectedWrapper data-testid="NoFileSelected">
    <MessageContainer>
      <Icon icon={Icons.DIRECTORY} className="directoryIcon" width={50} height={50}/>
      <p>Please choose a file from the left menu</p>
    </MessageContainer>
  </NoFileSelectedWrapper>
);

export default NoFileSelected;
