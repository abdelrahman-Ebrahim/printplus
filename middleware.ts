import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const { pathname } = req.nextUrl;

  // Define protected routes
  const protectedRoutes = ["/"]; // Add your protected routes here

  // Define public routes (routes that don't require authentication)
  const publicRoutes = ["/login", "/register", "/forgetpassword"]; // Add your public routes here

  // Check if the user is authenticated
  const isAuthenticated = !!token;

  // Redirect authenticated users away from public routes
  if (isAuthenticated && publicRoutes.includes(pathname)) {
    const homeUrl = new URL("/", req.url); // Redirect to home or another appropriate route
    return NextResponse.redirect(homeUrl);
  }

  // Check if the route is public
  if (publicRoutes.includes(pathname)) {
    // Allow access to public routes for unauthenticated users
    return NextResponse.next();
  }

  // Check if the route is protected
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!isAuthenticated) {
      // Redirect to login if not authenticated
      const loginUrl = new URL("/login", req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Allow access to other routes (e.g., public routes not explicitly listed)
  return NextResponse.next();
}

// Define the routes where the middleware should run
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|help-circle.svg|profile.svg|logo.svg|search.svg|headphones.svg|cart.svg|check-circle.svg|fonts/.*).*)",
  ],
};