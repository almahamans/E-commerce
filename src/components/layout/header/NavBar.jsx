import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  
  const handleLogOut = () => {
    localStorage.removeItem("isSignIn");
  }
  return (
    <section>
      <ul className="flex justify-around gap-9 text-white font-medium">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/list-categories">List Categories</Link>
        </li>
        <li>
          <Link to="/list-products">List Products</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
        <li>
          <Link to="/" onClick={handleLogOut}>Sign Out</Link>
        </li>
      </ul>
    </section>
  );
}
