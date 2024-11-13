import React from 'react'

export const Price = ({ Price }) => {
  return (
    <p>
      <span>Price: </span>
      <strong>$</strong>
      {Price}
    </p>
  );
};
