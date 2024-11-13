import React from 'react'

export const Footer = () => {
    return (
      <footer className="text-center p-2 bottom-0 bg-pink-900 w-full">
        <p>All rights reserved. ©{new Date().getFullYear()} Pandora</p>
      </footer>
    );
}
