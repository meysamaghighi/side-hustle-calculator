import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = new URL(request.url);
  url.hostname = "cashcalcs.com";
  url.port = "";
  url.pathname = "/side-hustle" + url.pathname;
  if (url.pathname === "/side-hustle/") url.pathname = "/side-hustle";
  return NextResponse.redirect(url, 301);
}
