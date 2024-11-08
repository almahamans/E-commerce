import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { UserSignIn } from '../../APIservice/UserService';
import { TokenDecode } from '../../utilities/TokenDecode';

export const SignIn = () => {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({});

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
  if(!userData.email || !userData.password){
    setErrors("Email/Password is incorrect");
    return;
  }
  try {
    const userSignInfo = await UserSignIn(userData.email, userData.password);

    if (userSignInfo.token && userSignInfo.token !== "Email/Password is incorrect"){
      const decodedUser = TokenDecode(userSignInfo.token);
      localStorage.setItem("token", userSignInfo.token);
      localStorage.setItem("isSignIn", true);
      localStorage.setItem("role", decodedUser.role); 

      const getRole = localStorage.getItem("role"); 
      if(getRole === "Customer"){
        navigate("/customer-dashboard");
      }else if (getRole === "Admin"){
        navigate("/admin/dashboard")
      }else{
        console.log("error in navigatition")
      }
    } else {
      console.error("Email/Password is incorrect");
      setErrors("Email/Password is incorrect");
    }
  } catch (err) {
    console.error("signIn failed:", err); 
    setErrors("SignIn failed"); 
  }
};
  return (
    <section className="mt-9">
      <h1 className="text-center mb-9 font-bold uppercase text-red-800">
        Sign In
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 mx-auto w-96"
      >
        <section className="mb-3">
          <label htmlFor="email" className="mr-12">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={userData.email}
            onChange={handleInputChange}
            className="border-2 border-gray-700 p-1 w-72"
          />
          {errors.email && (
            <p className="text-red-500 text-center">{errors.email}</p>
          )}
        </section>
        <section className="mb-3">
          <label htmlFor="password" className="mr-5">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={userData.password}
            onChange={handleInputChange}
            className="border-2 border-gray-700 p-1 w-72"
          />
          {errors.password && (
            <p className="text-red-500 text-center">{errors.password}</p>
          )}
        </section>
        {/* {errors && <p className="text-red-500 text-center">{errors}</p>} */}
        <button
          type="submit"
          className="mx-auto mt-12 p-1 rounded bg-green-600 w-44"
        >
          Sign In
        </button>
      </form>
      <div className="flex justify-center items-center mt-5 gap-2">
        <h1>Do not have an account?</h1>
        <button
          onClick={() => {
            navigate("/register");
          }}
          className="underline w-fit"
        >
          Click here to Register
        </button>
      </div>
    </section>
  );
}
