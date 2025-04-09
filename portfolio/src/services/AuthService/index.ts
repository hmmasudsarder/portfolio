import {jwtDecode} from "jwt-decode";

export const getCurrentUser = async () => {
  if (typeof window === "undefined") {
    // localStorage is not available on the server
    console.error("localStorage is not available in server-side environments.");
    return null;
  }

  const accessToken = localStorage.getItem("token"); // Retrieve token from localStorage
  let decodedData = null;

  if (accessToken) {
    try {
      decodedData = jwtDecode(accessToken); // Decode the token
      console.log("Decoded Token:", decodedData);
      return decodedData;
    } catch (error) {
      console.error("Invalid token:", error);
      return null;
    }
  } else {
    console.warn("No token found in localStorage.");
    return null;
  }
};