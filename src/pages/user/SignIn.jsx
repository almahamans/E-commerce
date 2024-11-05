import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState({ value: "" });
    
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setUserData((prevState) => {
        return {
            ...prevState,
            [e.target.name]: e.target.value,
        };
        });
    };

const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    const token = await loginUser(userData.email, userData.password);
    if (token) {
      const updatedLoginInfo = { email: userData.email, isSignIn: true, token };
      localStorage.setItem("userInfo", JSON.stringify(updatedLoginInfo));
      navigate("/", { state: updatedLoginInfo });
    }
  } catch (err) {
    console.error("Login failed:", err); 
    setError(err.message); 
  }
};

    return (
      <section>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={userData.email}
              onChange={handleInputChange}
            />
          </section>
          <section>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={userData.password}
              onChange={handleInputChange}
            />
          </section>
          <button>Sign In</button>
        </form>
        <h1>Do not have an account?</h1>
        <button onClick={() => { navigate("/register"); }}>
          Click to Register
        </button>
      </section>
    );
}
