import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/prototype", "/prototype/:path*"],
};

export function middleware(req: NextRequest) {
  const token = process.env.M55_PROTO_TOKEN;
  const incoming = req.headers.get("x-m55-proto") ?? "";

  // Fail-Closed
  if (!token || incoming !== token) {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    url.search = "";
    return NextResponse.redirect(url, 302);
  }

  const res = NextResponse.next();

  // Vary: append (do not overwrite)
  const vary = res.headers.get("Vary");
  res.headers.set("Vary", vary ? `${vary}, x-m55-proto` : "x-m55-proto");

  // Robots hardening
  res.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");

  return res;
}
