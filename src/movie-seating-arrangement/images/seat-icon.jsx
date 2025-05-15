import { styled } from "nativewind";
import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SeatIcon = ({ fill = "#11163D", style, props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={14}W
    fill="none"
    style={style}
    {...props}
  >
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M6 0c-.994 0-1.8.818-1.8 1.826v6.696c0 .336.269.608.6.608h8.4c.331 0 .6-.272.6-.608V1.826C13.8.818 12.994 0 12 0H6ZM1.2 1.826c-.663 0-1.2.545-1.2 1.217v7.913C0 12.637 1.343 14 3 14h12c1.657 0 3-1.363 3-3.043V3.043c0-.672-.537-1.217-1.2-1.217h-1.2c-.663 0-1.2.545-1.2 1.217V9.13c0 .673-.537 1.218-1.2 1.218H4.8c-.663 0-1.2-.545-1.2-1.218V3.043c0-.672-.537-1.217-1.2-1.217H1.2Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SeatIcon;
