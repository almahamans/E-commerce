import React from 'react'
import { useNavigate } from 'react-router-dom';

export const SignOut = () => {
  const navigate = useNavigate();

    return (
      <div>
        <button onClick={()=>{
          localStorage.removeItem("isSignIn");
          navigate("/");
        }}> click to confirm Log out</button>
      </div>
    );
}
