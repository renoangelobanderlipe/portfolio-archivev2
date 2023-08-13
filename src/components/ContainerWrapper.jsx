import React from 'react';

export const ContainerWrapper = ({ children, style }) => {
  return (
    <div className={`flex flex-col  py-[200px] px-150 gap-48 ${style}`}>
      {children}
    </div>
  );
} 