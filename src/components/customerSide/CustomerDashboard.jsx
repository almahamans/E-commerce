import React, { useEffect, useState } from 'react'

import { getUserByIdService } from '../../APIservice/UserService';

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
    <div>
      {userInfo && (
        <>
          <p>{userInfo.userName}</p>
          <p>{userInfo.email}</p>
          <p>{userInfo.phone}</p>
        </>
      )}
    </div>
  );
};
