import { jwtDecode } from "jwt-decode";
import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const { cookies, url } = req;

  let token = cookies.get("token")?.value;
  let decode_token = null;

  if (token) decode_token = jwtDecode(String(token));

  if (
    (url.includes("/panel") || url.includes("/plans-list")) &&
    (!token || !decode_token)
  ) {
    const redirect_url = new URL("/login", url);
    return NextResponse.redirect(redirect_url);
  }

  return NextResponse.next();
}
