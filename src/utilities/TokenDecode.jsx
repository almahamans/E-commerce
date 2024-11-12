import { jwtDecode } from "jwt-decode";

export const TokenDecode = (token) => {
  if (!token) {
    console.error("No token provided.");
    return null;
  }

  try {
    const decoded = jwtDecode(token);
    console.log("token:", decoded);
    return {
      userId: decoded.userId,
      username: decoded.userName,
      email: decoded.email,
      role: decoded.role
    };
  } catch (error) {
    console.error("invalid token:", error);
    return null;
  }
}