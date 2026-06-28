import { NextResponse, type NextRequest } from "next/server";

const protectedRoutes = ["/dashboard", "/analytics", "/projects", "/team", "/billing", "/settings", "/admin"];

export function middleware(request: NextRequest) {
  const isProtected = protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route));
  const hasDemoSession = request.cookies.has("next-auth.session-token") || process.env.NODE_ENV === "development";

  if (isProtected && !hasDemoSession) {
    const url = new URL("/login", request.url);
    url.searchParams.set("callbackUrl", request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
};
