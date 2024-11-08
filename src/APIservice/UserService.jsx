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

export const UserSignIn = async (email, password) => {
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
};

export const GetUserById = async (id) => {
  const url = `${baseUrl}/api/v1/users`;
  const response = await axios.get(`${url}/${id}`);
  console.log(response)
  return response.data;
}

export const GetUserInfo = async (token) => {
  try {
    const response = await axios(`${baseUrl}/api/v1/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const userData = response;
      console.log('userData', userData);

      const loggedInUser = userData.data.items.find((item) => item.userId === userData.data.items[0].userId);

      return {
        id: loggedInUser.userId,
        username: loggedInUser.userName,
        email: loggedInUser.email,
        role: loggedInUser.role,
      };
    } else {
      console.error('Error fetching user info:', response.status);
      throw new Error(errorText || 'Failed to fetch user info');
    }
  } catch (error) {
    console.error('Error fetching user info:', error);
    throw error;
  }
}