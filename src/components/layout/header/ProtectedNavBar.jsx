import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo-pandora.svg"
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
    <header className=" bg-pink-200 medium:h-[7rem] h-[10rem] relative medium:mb-9 mb-12">
      <div className="flex justify-around items-center p-5 bg-white absolute right-0 left-0 top-5 medium:flex-row flex-col">
        <div>
          <span>
            <img src={logo} alt="pandora jewelry logo" width={"80%"} />
          </span>
        </div>
        <div className="flex justify-around gap-9 text-black font-small">
          <Link to="/">Home</Link>
          {signedIn && role === "Admin" && (
            <Link to="/admin/dashboard">Dashboard</Link>
          )}
          {signedIn && role === "Customer" && <NavBar />}
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
      </div>
    </header>
  );
};
