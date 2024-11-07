import React from 'react'
import { ProtectedNavBar } from './ProtectedNavBar';

export const ProtectedHeader = () => {
    return (
      <header className="flex justify-around p-5 bg-gray-700">
        <div>
          <span>Logo/Name</span>
        </div>
        <ProtectedNavBar />
      </header>
    );
}
