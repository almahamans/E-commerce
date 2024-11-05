import React from 'react'

export const SignOut = () => {
    return (
      <div>
        <h1>you are logged out now...</h1>
        {localStorage.removeItem("isLogin")}
      </div>
    );
}
