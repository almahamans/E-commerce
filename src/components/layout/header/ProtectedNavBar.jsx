import React from 'react'
import { Link } from 'react-router-dom';

import { NavBar } from './NavBar';
import { AdminNavBar } from './AdminNavBar';

export const ProtectedNavBar = () => {
  const signedIn = localStorage.getItem("isSignIn");
  const role = localStorage.getItem("role");
  
  return (
    <div className="flex justify-around gap-9 text-white font-medium">
      <Link to="/">Home</Link>
      {signedIn && role === "Admin" && (
          <AdminNavBar/>
      )}
      {signedIn && role === "Customer" && (
          <NavBar/>
      )}
      {!signedIn && (
        <ul className="flex justify-around gap-9">
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
        </ul>
      )}
    </div>
  );
};
