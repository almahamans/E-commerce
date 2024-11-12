import React, { useState, useEffect } from 'react'

import { deleteUserService, getAllUsersService } from "../../../../APIservice/UserService";

export const UsersControll = () => {
  const [users, setUsers] = useState([]);

  const handlefetch = async() => {
      try{
        const response = await getAllUsersService();
      setUsers(response.data.items)
      console.log("component",response.data.items)  
      }catch(error){
          console.error(error)
      }  
  }

  const handleDelete = async(id) => {
      try{
          await deleteUserService(id);
          setUsers((prevUsers)=>{
              prevUsers.filter((user)=>{
                  user.userId !== id
              })
          })
      }catch(error){
          console.log(error)
      }
  }

  useEffect(()=>{
      handlefetch();
  },[])
  console.log(users)
  return (
    <div className="mt-3">
      <h1 className="text-red-900 font-bold text-center mb-8">Users management</h1>
      {users && users.length > 0 ? (
        users.map((user) => {
          return (
            <section
              key={user.userId}
              className="medium:grid medium:grid-cols-5 mb-3 p-0 bg-gray-200 xxsmall:flex xxsmall:flex-col"
            >
              <p className="medium:border-x-2 border-red-400 p-2 xxsmall:border-2">
                {user.userName}
              </p>
              <p className="medium:border-x-2 border-red-400 p-2 col-span-2 xxsmall:border-2">
                {user.email}
              </p>
              <p className="text-center medium:border-x-2 border-red-400 p-2 xxsmall:border-2">
                {user.role === 0 ? "Admin" : "Customer"}
              </p>
              <button
                onClick={() => handleDelete(user.userId)}
                className="text-center medium:border-x-2 border-red-400 p-2 font-bold underline xxsmall:border-2"
              >
                Delete
              </button>
            </section>
          );
        })
      ) : (
        <h1>not found</h1>
      )}
    </div>
  );
}
