import React from 'react';

export const ContainerWrapper = ({ children, style }) => {
  return (
    <div className={`flex flex-col px-24  tablet:px-48  laptop:px-100 desktop:py-[200px] desktop:px-150 gap-48 ${style}`}>
      {children}
    </div>
  );
} 