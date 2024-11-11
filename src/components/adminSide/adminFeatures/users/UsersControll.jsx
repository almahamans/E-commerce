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
        <div className='mt-3'>
            {users && users.length > 0 ?
                (
                    users.map((user) => {
                    return (
                      <section
                        key={user.userId}
                        className="grid grid-cols-4 gap-5 p-2"
                      >
                        <p>{user.userName}</p>
                        <p>{user.email}</p>
                        <p className="text-center">
                          {user.role === 0 ? "Admin" : "Customer"}
                        </p>
                        <button onClick={() => handleDelete(user.userId)}>Delete</button>
                      </section>
                    );
                })
                ) : (
                    <h1>not found</h1>
                )
            }
        </div>
    )
}
