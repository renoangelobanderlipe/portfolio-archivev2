import React from "react";

export const CardComponent = ({ children, style }) => {
  return (
    <div className={`p-[48px] items-start gap-[48px] rounded-[20px] bg-background ${style}`}>
      {children}
    </div>
  );
}