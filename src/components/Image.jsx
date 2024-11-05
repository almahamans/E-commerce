import React from 'react'

export const Image = ({ Image, title }) => {
  return (
    <div>
      <img src={Image} alt={title} className="max-h-56 shadow-md" />
    </div>
  );
};
