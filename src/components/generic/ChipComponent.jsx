import React, { Fragment } from "react";

export const ChipComponent = ({ title, style }) => {
  return (
    <div
      className={`flex items-center flex-nowrap  px-8 h-[32px] justify-center ${style}`}
    >
      {title}
    </div>
  );
};
