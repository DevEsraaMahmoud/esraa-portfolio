import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { defaultLocale, isLocale } from "@/lib/i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/opengraph-image")
  ) {
    return NextResponse.next();
  }

  if (/\.(ico|png|jpg|jpeg|gif|svg|webp|pdf|txt|xml)$/i.test(pathname)) {
    return NextResponse.next();
  }

  const first = pathname.split("/").filter(Boolean)[0];
  const hasLocale = first ? isLocale(first) : false;

  if (!hasLocale) {
    const url = request.nextUrl.clone();
    const suffix = pathname === "/" ? "" : pathname;
    url.pathname = `/${defaultLocale}${suffix}`;
    return NextResponse.redirect(url);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", first!);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:ico|png|jpg|jpeg|gif|svg|webp|pdf)$).*)",
  ],
};
