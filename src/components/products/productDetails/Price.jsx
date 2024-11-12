import React from 'react'

export const Price = ({ Price }) => {
  return (
    <p>
      <span>Price:</span>
      {Price} <strong className="text-xs">SAR</strong>
    </p>
  );
};
