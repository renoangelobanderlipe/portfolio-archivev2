import React from 'react';

export const TextFieldComponent = ({ style, children }) => {
  return (
    <p className={`text-body-text font-body-text ${style}`} >
      {children}
    </p >
  );
}