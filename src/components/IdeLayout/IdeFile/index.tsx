import React, { FC } from "react";
import { IdeFileWrapper } from "./IdeFile.styled";

interface IdeFileProps {
  component?: React.ReactNode;
}

const IdeFile: FC<IdeFileProps> = ({ component }) => {
  if (!component) return null;
  return (
    <IdeFileWrapper data-testid="IdeFile">
        {component}
        {/* </ContentWrapper> */}
    </IdeFileWrapper>
  );
};

export default IdeFile;
