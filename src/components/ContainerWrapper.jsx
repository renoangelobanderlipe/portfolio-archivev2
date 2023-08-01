import React from 'react';

export const ContainerWrapper = ({ children }) => {
  return (
    <div className='container px-150 py-100'>
      {children}
    </div>
  );
} 