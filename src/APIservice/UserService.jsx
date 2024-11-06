import axios from "axios";
import { stringify } from "postcss";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const UserRegister = async (userName, password, email) => {
  const url = `${baseUrl}/api/v1/auth/register`;
  try {
    const userData = {
      UserName: userName,
      Password: password,
      Email: email,
    };
    const response = await axios.post(url, userData, {
      headers: {
        "Content-Type": "application/json",
      }
    });
    console.log("userData", userData);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return;
  }
};

export const UserLogin = async (email, password) => {
  try {
    const loginInfo = {
      Email: email,
      Password: password,
    };
    const url = `${baseUrl}/api/v1/auth/login`;
    const response = await axios.post(url, loginInfo, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("response.config.data", response.config.data);
    console.log("response.data.token", response.data.token);
    return response.data;
  } catch (error) {
    // Handle error based on backend's response
    if (error.response && error.response.data && error.response.data.message) {
      return(error.response.data.message);
    } else {
      return("An error occurred during login.");
    }
  }

  // if (!response.ok) {
  //   const errorData = await response.data;
  //   throw new Error(errorData.message); 
  // }
  // const data = await response.json();
  // return data.token; 
};