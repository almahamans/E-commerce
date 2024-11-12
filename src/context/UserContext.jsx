import React, { createContext, useEffect, useState } from 'react'

import { getAllUsersService } from '../APIservice/UserService';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);

    const handleFetchUsers = async () => {
        try {
            const response = await getAllUsersService();
            setUsers(response.data.items);
            console.log(response.data.items);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    useEffect(() => {
        handleFetchUsers();
    }, []);

    return (
      <UserContext.Provider value={{ users, setUsers, handleFetchUsers }}>
        {children}
      </UserContext.Provider>
    );
};

