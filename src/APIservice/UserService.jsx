import axios from "axios";

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

export const loginUser = async (email, password) => {
  const url = `${baseUrl}/api/v1/auth/login`;
    const response = await axios.post(url,  {
      headers: {
        "Content-Type": "application/json",
      }
    });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Login failed"); 
  }
  const data = await response.json();
  return data.token; 
};