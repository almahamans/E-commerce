import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserRegister } from "../../APIservice/UserService";

export const UserRegisterForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    password: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUser((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const validDataInput = () => {
    const newError = {};
    if (!user.name.trim() || user.name.length < 2) {
      newError.name = "Name must be at least 2 characters";
    }
    if (!/^[a-zA-Z\s]+$/.test(user.name)) {
      newError.name = "Only characters are allowed";
    }
    if (!user.email.trim()) {
      newError.email = "Email is required";
    } else if (
      !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(user.email)
    ) {
      newError.email = "Enter a valid email address";
    }
    if (!user.password.trim()) {
      newError.password = "Password is required";
    } else if (user.password.length < 8) {
      newError.password = "Password must be at least 8 characters long";
    } else if (!/[A-Z]/.test(user.password)) {
      newError.password = "Password must contain at least one uppercase letter";
    } else if (!/[a-z]/.test(user.password)) {
      newError.password = "Password must contain at least one lowercase letter";
    } else if (!/[0-9]/.test(user.password)) {
      newError.password = "Password must contain at least one number";
    } else if (!/[!@#$%^&*]/.test(user.password)) {
      newError.password =
        "Password must contain at least one special character (e.g., !@#$%^&*)";
    }
    setErrors(newError);
    return Object.keys(newError).length === 0; // return true if no error
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validDataInput()) {
      try {
        const response = await UserRegister(
          user.name,
          user.password,
          user.email
        );
        console.log(response); // Handle successful registration response

        // Save user data in local storage
        const userInfo = {
          name: user.name,
          password: user.password,
          email: user.email,
          isSignIn: true,
        };
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        localStorage.setItem("isSignIn", true);
        navigate("/");
      } catch (error) {
        console.error("Registration failed:", error);
        setErrors({
          ...errors,
          server: "Registration failed. Please try again.",
        });
      }
    }
  };

  return (
    <div className="mt-9">
      <h1 className="text-center mb-9 font-bold uppercase text-red-800">
        Register
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 mx-auto w-96"
      >
        <div className="mb-3">
          <label htmlFor="name" className="mr-12">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={user.name}
            onChange={handleChange}
            required
            className="border-2 border-gray-700 p-1 w-72"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="mr-12">
            Email:
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={user.email}
            onChange={handleChange}
            required
            className="border-2 border-gray-700 p-1 w-72"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="mr-5">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={user.password}
            onChange={handleChange}
            required
            className="border-2 border-gray-700 p-1 w-72"
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>

        {errors.server && <p className="text-red-500">{errors.server}</p>}

        <button
          type="submit"
          className="mx-auto mt-12 p-1 rounded bg-green-600 w-44"
        >
          Register
        </button>
      </form>

      <div className="flex justify-center items-center mt-5 gap-2">
        <h1 className="">Already signed up?</h1>
        <button
          onClick={() => {
            navigate("/signin");
          }}
          className="underline w-fit"
        >
          Click here to sign in
        </button>
      </div>
    </div>
  );
};
