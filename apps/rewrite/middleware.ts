import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: "/blog/:path*",
};

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname.slice(5);
  const response = await fetch(`http://localhost:8080${pathname}`, {
    method: "HEAD",
  });
  return NextResponse.rewrite(response.url);
}
