import React from 'react'

export const Image = ({ Image, title, style = "max-h-56" }) => {
  return (
    <div>
      <img src={Image} alt={title} className={`${style} shadow-md`} />
    </div>
  );
};
