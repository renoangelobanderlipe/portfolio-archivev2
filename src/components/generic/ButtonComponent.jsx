import React from 'react';

export const ButtonComponent = ({ children, style }) => {
  return (
    <button className={`flex items-center justify-center px-20 h-button  bg-primary-500 font-body-text text-primary-100 rounded-[30px] text-btn-lg uppercase hover:bg-primary-800 hover:text-primary-500 ${style}`} >
      {children}
    </button>
  );
}