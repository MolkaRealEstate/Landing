/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MoneyIconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MoneyIconIcon(props: MoneyIconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 27 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13.333 3.625a4.375 4.375 0 100 8.75 4.375 4.375 0 000-8.75zm0 7a2.625 2.625 0 110-5.25 2.625 2.625 0 010 5.25zm12.25-10.5h-24.5A.875.875 0 00.208 1v14a.875.875 0 00.875.875h24.5a.875.875 0 00.875-.875V1a.875.875 0 00-.875-.875zm-5.07 14H6.154A6.21 6.21 0 001.958 9.93V6.07a6.21 6.21 0 004.195-4.195h14.36a6.21 6.21 0 004.195 4.195v3.86a6.21 6.21 0 00-4.194 4.195zm4.195-9.913a4.463 4.463 0 01-2.337-2.337h2.337v2.337zM4.296 1.875a4.464 4.464 0 01-2.338 2.337V1.875h2.338zm-2.338 9.913a4.463 4.463 0 012.338 2.337H1.958v-2.337zm20.413 2.337a4.463 4.463 0 012.337-2.337v2.337h-2.337z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MoneyIconIcon;
/* prettier-ignore-end */
