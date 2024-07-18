import React, { FC } from "react";
import { LoaderWrapper } from "./Loader.styled";

import { BallTriangle, ColorRing } from "react-loader-spinner";
import { getColor } from "@/styles/utils";

interface LoaderProps {}

const Loader: FC<LoaderProps> = () => (
  <LoaderWrapper data-testid="Loader">
    <ColorRing
      visible={true}
      height="180"
      width="180"
      ariaLabel="color-ring-loading"
      wrapperClass="color-ring-wrapper"
      colors={[
        getColor("secondary").green,
        getColor("background").medium,
        getColor("accent").plum,
        getColor("background").medium,
        getColor("secondary").green,
      ]}
    />
  </LoaderWrapper>
);

export default Loader;
