import React from 'react'

import { Link } from 'react-router-dom';

export const AdminNavBar = () => {
    const handleSignOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("isSignIn");
    };

    return (
      <section>
        <ul className="flex justify-around gap-9 text-white font-medium">
          <li>
            <Link to="/admin/dashboard">
                DashBoard
            </Link>
          </li>
          <li>
            <Link to="/" onClick={handleSignOut}>
              Sign Out
            </Link>
          </li>
        </ul>
      </section>
    );
}