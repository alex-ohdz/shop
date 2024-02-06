import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

// Esta función se ejecuta en cada solicitud
export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const pathname = req.nextUrl.pathname;

  // Redirigir usuarios autenticados que intentan acceder a la página de inicio de sesión o registro
  if (token && (pathname === "/account/login" || pathname === "/account/signup")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Redirigir usuarios no autenticados que intentan acceder a /user/wishlist o /user/profile
  if (!token && (pathname.startsWith("/user/wishlist") || pathname === "/user/profile")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/user/:path*", "/account/:path*"],
};
