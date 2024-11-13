import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <section>
      <ul className="flex justify-around gap-9">
        <li>
          <Link to="/customer/categories">List Categories</Link>
        </li>
        <li>
          <Link to="/customer/products">Products</Link>
        </li>
        <li>
          <Link to="/customer/cart">Cart</Link>
        </li>
        <li>
          <Link to="/customer/profile">Profile</Link>
        </li>
      </ul>
    </section>
  );
}
