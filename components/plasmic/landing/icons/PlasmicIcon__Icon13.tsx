/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon13Icon(props: Icon13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#kuQoG4o1r3Tqa)"}>
        <rect width={"40"} height={"40"} rx={"20"} fill={"#F9DB3E"}></rect>

        <path
          d={
            "M25.965 18.44c.13 1.101.196 1.997.196 2.688 0 1.605-.224 3.015-.672 4.228-.448 1.195-1.074 2.128-1.876 2.8a4.228 4.228 0 01-2.744.98 3.66 3.66 0 01-1.036-.14c.242 2.053.364 4.573.364 7.56 0 1.307-.028 2.539-.084 3.696l-2.408.336c-.28-3.808-.728-7.299-1.344-10.472a66.375 66.375 0 00-2.464-9.184l4.172-2.492c.261 1.344.522 2.361.784 3.052.261.672.578 1.139.952 1.4.373.261.877.392 1.512.392.56 0 1.045-.121 1.456-.364.429-.243.681-.588.756-1.036-.038-.373-.29-1.167-.756-2.38l3.192-1.064z"
          }
          fill={"#000"}
        ></path>
      </g>

      <defs>
        <clipPath id={"kuQoG4o1r3Tqa"}>
          <rect width={"40"} height={"40"} rx={"20"} fill={"#fff"}></rect>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon13Icon;
/* prettier-ignore-end */
