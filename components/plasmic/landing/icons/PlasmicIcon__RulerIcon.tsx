/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RulerIconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RulerIconIcon(props: RulerIconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 26"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M24.405 7.025l-5.763-5.762a1.75 1.75 0 00-2.475 0L.929 16.5a1.75 1.75 0 000 2.475l5.763 5.762a1.75 1.75 0 002.475 0L24.405 9.5a1.75 1.75 0 000-2.475zM7.929 23.5l-5.762-5.763 3.5-3.5 2.88 2.882a.876.876 0 101.239-1.238L6.904 13l2.263-2.263 2.88 2.882a.876.876 0 101.239-1.238L10.404 9.5l2.263-2.263 2.88 2.882a.876.876 0 101.239-1.238L13.904 6l3.5-3.5 5.763 5.763L7.929 23.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default RulerIconIcon;
/* prettier-ignore-end */
