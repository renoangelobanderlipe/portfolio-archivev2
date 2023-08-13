import React, { Fragment } from "react";

export const ChipComponent = ({ title, style }) => {
  return (
    <div className={`flex items-center bg-primary-400 px-8 h-[32px] justify-center ${style}`}>
      {title}
    </div>
  );
}