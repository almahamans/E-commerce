import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserLogin } from '../../APIservice/UserService';

export const SignIn = () => {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setUserData((prevState) => {
        return {
            ...prevState,
            [e.target.name]: e.target.value,
        }
        })
    };

const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    const userLogInfo = await UserLogin(userData.email, userData.password);

    if (userLogInfo.token && userLogInfo.token !== "Email/Password is incorrect") {
      localStorage.setItem("isLogin", true);
      localStorage.setItem("token", userLogInfo.token);
      localStorage.setItem("isSignIn", true);
      const isSign = localStorage.getItem("userInfo");
      console.log("issign",isSign.isSignIn)
      if (isSign.isSignIn){
        
      }
      navigate("/");
    }else{
      return
    }
  } catch (err) {
    console.error("Login failed:", err);  
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
