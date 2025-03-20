"use client";

import { useEffect, useState } from "react";
import verifyToken from "@/utils/verifyToken";
import { JwtPayload } from "jsonwebtoken";

interface CustomJwtPayload extends JwtPayload {
  id?: string;
  role?: string;
}

interface User {
  _id: string;
  email: string;
  name: string;
  role: string;
}

const DashboardPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [tokenInfo, setTokenInfo] = useState<CustomJwtPayload | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchUser = async (userId: string) => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/${userId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }
        const data = await response.json();
        setUser(data.data );
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");

      if (token) {
        try {
          const decodedToken = verifyToken(token) as CustomJwtPayload;
          setTokenInfo(decodedToken);

          if (decodedToken.id) {
            fetchUser(decodedToken.id);
          }
        } catch (error) {
          console.error("Invalid token:", error);
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    }
  }, []);

  if (loading) return <h1 className="text-center text-2xl mt-10">Loading...</h1>;

  return (
    <div>
      <h1 className="text-4xl text-center mt-10">Welcome to the dashboard</h1>
      {user ? (
        <div className="text-center mt-5">
          <h2 className="text-2xl">Name: {user.name}</h2>
          <h2 className="text-2xl">Email: {user.email}</h2>
          <h2 className="text-2xl">Role: {user.role}</h2>
        </div>
      ) : (
        <h1 className="text-2xl text-center mt-5 text-red-500">
          No user data found
        </h1>
      )}
    </div>
  );
};

export default DashboardPage;
