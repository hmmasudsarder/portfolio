import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

type Role = keyof typeof roleBasedPrivateRoutes;

const authRoutes = ["/login", "/register"];

const roleBasedPrivateRoutes = {
  user: [/^\/user/, /^\/create-shop/],
  admin: [/^\/admin/],
};

const getCurrentUser = async (token: string | undefined) => {
  if (!token) return null;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload & { role?: string }; // Replace with your JWT secret
    return decoded; // This will contain user info (e.g., id, role)
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  // Retrieve token from cookies or headers
  const token = request.cookies.get("token")?.value || request.headers.get("Authorization")?.replace("Bearer ", "");

  // Get user info from token
  const userInfo = await getCurrentUser(token);

  if (!userInfo) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(
          `http://localhost:3000/login?redirectPath=${pathname}`,
          request.url
        )
      );
    }
  }

  if (userInfo && userInfo.role && roleBasedPrivateRoutes[userInfo.role as Role]) {
    const routes = roleBasedPrivateRoutes[userInfo?.role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
};

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/create-project",
    "/dashboard/all-project",
    "/dashboard/create-blogs",
    "/dashboard/contact",
    "dashboard/all-blogs",
  ],
};