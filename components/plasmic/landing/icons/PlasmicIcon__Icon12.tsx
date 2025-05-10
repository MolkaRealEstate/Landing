/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon12Icon(props: Icon12IconProps) {
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

      <g clipPath={"url(#-4PYjYJOWzvxa)"}>
        <rect width={"40"} height={"40"} rx={"20"} fill={"#F9DB3E"}></rect>

        <path
          d={
            "M20.875 18.44a91.382 91.382 0 011.624 17.108c0 .97-.038 2.539-.112 4.704l-2.408.336c-.28-3.827-.719-7.317-1.316-10.472a63.278 63.278 0 00-2.352-9.072l4.564-2.604z"
          }
          fill={"#000"}
        ></path>
      </g>

      <defs>
        <clipPath id={"-4PYjYJOWzvxa"}>
          <rect width={"40"} height={"40"} rx={"20"} fill={"#fff"}></rect>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon12Icon;
/* prettier-ignore-end */
