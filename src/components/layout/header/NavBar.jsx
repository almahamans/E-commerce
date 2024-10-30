import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const NavBar = () => {
  return (
    <section>
      <ul className="flex justify-around items-center bg-gray-700 text-white font-medium p-5">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/list-products">List Products</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <Outlet />
      </ul>
    </section>
  );
}
