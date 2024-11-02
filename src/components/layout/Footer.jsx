import React from 'react'

export const Footer = () => {
    return (
      <footer className='text-center p-2'>
          <p>©{new Date().getFullYear()}. All rights reserved.</p>
      </footer>
    );
}
