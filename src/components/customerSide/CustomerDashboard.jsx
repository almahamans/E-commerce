import React, { useEffect, useState } from 'react'

import { getUserByIdService } from '../../APIservice/UserService';
import { Image } from "../Image";

export const CustomerDashboard = () => {
  const [userInfo, setUserInfo] = useState("");
  let customerId = localStorage.getItem("userId");
  console.log(customerId)
  const handleFetchData = async () => {
    try {
      const response = await getUserByIdService(customerId);
      setUserInfo(response);
      console.log(response);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
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
        <section className="flex flex-col items-center gap-3 p-5 mx-auto mt-9 border-4 border-pink-900 h-72 w-1/2 bg-gray-200">
          <p className="text-sm text-pink-900">User Name: </p>
          <p>{userInfo.userName}</p>
          <p className="text-sm text-pink-900">Email:</p>
          <p>{userInfo.email}</p>
        </section>
      )}
    </section>
  );
};
