import React, { useEffect, useState } from 'react'

import { getUserByIdService, updateUserInfoService } from '../../APIservice/UserService';


export const CustomerDashboard = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [updatedUserInfo, setUpdatedUserInfo] = useState({});
  
  let customerId = localStorage.getItem("userId");

  const handleFetchData = async () => {
    try {
      const response = await getUserByIdService(customerId);
      setUserInfo(response);
      setUpdatedUserInfo(response)
      console.log(response);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }
  const handlSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await updateUserInfoService(customerId, updatedUserInfo);
      setUserInfo(response)
      console.log(response);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
    
  }
  const handleInputChange = (field, value) => {
    setUpdatedUserInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  useEffect(() => {
    handleFetchData();
  }, [customerId]);

  return (
    <section className="mb-24">
      <h1 className="text-center mt-9 font-bold text-lg text-pink-900 underline">
        Profile
      </h1>
      {userInfo && (
        <section className="flex flex-col gap-3 p-5 mx-auto mt-9 border-4 border-pink-900 h-72 w-1/2 bg-gray-200">
          <form onSubmit={handlSubmit}>
            <label className="text-sm text-pink-900">User Name: </label>
            <input
              type="text"
              value={updatedUserInfo.userName || ""}
              onChange={(e) => handleInputChange("userName", e.target.value)}
              className="border rounded p-2 w-full"
              required
            />
            <label className="text-sm text-pink-900">Email: </label>
            <input
              type="text"
              value={updatedUserInfo.email || ""}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="border rounded p-2 w-full"
              required
            />
            <label className="text-sm text-pink-900">Phone: </label>
            <input
              type="text"
              value={updatedUserInfo.phone || ""}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="border rounded p-2 w-full"
              required
            />
            <button
              type="submit"
              className="rounded-full border bg-pink-800 px-4 py-1 my-5 text-white"
            >
              Change Information
            </button>
          </form>
        </section>
      )}
    </section>
  );
};
