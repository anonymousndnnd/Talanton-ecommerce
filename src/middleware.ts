import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("admin_session")?.value;

  const publicAdminRoutes = ["/admin", "/admin/sign-in", "/admin/sign-up"];

  //  If token exists (logged in) and tries to access public routes → redirect to dashboard
  if (token && publicAdminRoutes.includes(pathname)) {
    const dashboardUrl = new URL("/admin/allproducts", req.url);
    return NextResponse.redirect(dashboardUrl);
  }

  // 2️⃣ If path starts with /admin but is NOT a public route and token is missing → redirect to login
  if (pathname.startsWith("/admin") && !publicAdminRoutes.includes(pathname)) {
    if (!token) {
      const loginUrl = new URL("/admin", req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // 3️⃣ Allow everything else
  return NextResponse.next();
}

//  Limit middleware only to admin paths
export const config = {
  matcher: ["/admin/:path*"], // applies only to /admin and its subpaths
};
