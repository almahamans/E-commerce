import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserLogin } from '../../APIservice/UserService';

export const SignIn = () => {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState("");
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
      localStorage.setItem("token", userLogInfo.token);
      localStorage.setItem("isSignIn", true);
      navigate("/");
    }else{
      console.error("Email/Password is incorrect");
      setErrors("Email/Password is incorrect");
      return
    }
  } catch (err) {
    console.error("Login failed:", err);  
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
          </section>
          {errors && <p className="text-red-500 text-center">{errors}</p>}
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
