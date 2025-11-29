import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/AuthService";

import { JwtPayload } from "jsonwebtoken";

interface ExtendedJwtPayload extends JwtPayload {
  role: keyof typeof roleBasedPrivateRoutes;
}

type Role = keyof typeof roleBasedPrivateRoutes;

const authRoutes = ["/login", "/register"];

const roleBasedPrivateRoutes = {
  user: [/^\/user/],
  admin: [/^\/admin/],
};
export const middleware = async (request: NextRequest) => {
  const userInfo = (await getCurrentUser()) as ExtendedJwtPayload | null;
  const pathname = request.nextUrl.pathname;

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

  if (userInfo?.role && roleBasedPrivateRoutes[userInfo?.role as Role]) {
    const routes = roleBasedPrivateRoutes[userInfo?.role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
};

export const config = {
  matcher: [
    "/login",

    "/admin",
    "/admin/:page",
    "/user",
    "/user/:page",
  ],
};