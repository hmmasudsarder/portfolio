import { jwtDecode } from "jwt-decode";

const verifyToken = (token: string | null) => {
  if (!token) {
    console.error("No token found");
    return null;
  }

  if (token.split(".").length !== 3) {
    console.error("Invalid token format");
    return null;
  }

  try {
    return jwtDecode(token);
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};

export default verifyToken;
