import { getToken } from "next-auth/jwt";

// Esta función se ejecuta en cada solicitud
export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const pathname = req.nextUrl.pathname;

  // Si no hay token y se está intentando acceder a una ruta protegida
  if (!token && pathname.startsWith('/whishlist')) {
    const url = req.nextUrl.clone();
    url.pathname = '/'; // Redirige a la página de inicio de sesión
    return Response.redirect(url);
  }
}
