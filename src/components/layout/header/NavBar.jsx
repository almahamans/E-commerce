import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'

export const NavBar = () => {
  const { ClearCart } = useContext(CartContext);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isSignIn");
    ClearCart();
  }

  return (
    <section>
      <ul className="flex justify-around gap-9 text-white font-medium">
        <li>
          <Link to="/categories">List Categories</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/customer-profile">Profile</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/" onClick={handleSignOut} replace>
            Sign Out
          </Link>
        </li>
      </ul>
    </section>
  );
}
