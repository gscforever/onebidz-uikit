import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox={props.className === "mobile-icon" ? "0 0 45 30" : "0 0 60 40"} {...props}>
      <image
        width={props.className === "mobile-icon" ? "45" : "60"}
        height={props.className === "mobile-icon" ? "30" : "40"}
        href="/images/onebidz/logo.png"
      />
    </Svg>
  );
};

export default Icon;
