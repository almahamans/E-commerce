import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { CartContext } from '../../../context/CartContext';
import { NavBar } from './NavBar';

export const ProtectedNavBar = () => {
  const { ClearCart } = useContext(CartContext);
  const signedIn = localStorage.getItem("isSignIn");
  const role = localStorage.getItem("role");
  console.log(role)
  

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isSignIn");
    ClearCart();
  };
  return (
    <header className="flex justify-around p-5 bg-gray-700">
      <div>
        <span>Logo/Name</span>
      </div>
      <div className="flex justify-around gap-9 text-white font-medium">
        <Link to="/">Home</Link>
        {signedIn && role === "Admin" && (
          <Link to="/admin/dashboard">Dashboard</Link>
        )}
        {signedIn && role === "Customer" && (
          <NavBar /> 
        )        
        }
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
        <Link to="/" onClick={handleSignOut} replace>
          Sign Out
        </Link>
      </div>
    </header>
  );
};
