import React from 'react'
import { NavBar } from './NavBar'

export const Header = () => {
    return (
      <header className="flex justify-around p-5 bg-gray-700">
        <div>
          <span>Logo/Name</span>
        </div>
        <NavBar />
      </header>
    );
}
