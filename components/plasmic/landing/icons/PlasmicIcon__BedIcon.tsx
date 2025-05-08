/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BedIconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BedIconIcon(props: BedIconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 27 20"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M22.625 3.875H2.5V1.25a.875.875 0 00-1.75 0v17.5a.875.875 0 101.75 0v-3.5h22.75v3.5a.875.875 0 101.75 0V8.25a4.375 4.375 0 00-4.375-4.375zM2.5 5.625h7.875V13.5H2.5V5.625zm9.625 7.875V5.625h10.5A2.625 2.625 0 0125.25 8.25v5.25H12.125z"
        }
        fill={"#9DA7B1"}
      ></path>
    </svg>
  );
}

export default BedIconIcon;
/* prettier-ignore-end */
