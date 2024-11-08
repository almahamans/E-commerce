import React, { createContext } from 'react'

export const UserContext = createContext(); 

export const UserProvider = ({ childern }) => {
      const [Token, setToken] = useState();
      const [isAdmin, setIsAdmin] = useState(false);
      const [userName, setUserName] = useState(null);
      const [userId, setUserId] = useState(null);
      const [userLoggedInData, setUserLoggedInData] = useState(null);
      
    return (
        <div>
            
        </div>
    )
}
