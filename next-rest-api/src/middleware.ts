import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/*
 * Routing: Middleware | Next.js
 * https://nextjs.org/docs/app/building-your-application/routing/middleware
 */

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const regex = new RegExp("/api/todos/*");
  // check whether not match the regex pattern, /api/hello
  if (!regex.test(request.url)) {
    console.log("request url is not of todo api");
  }

  console.log("Middleware!");
  console.log(request.method);
  console.log(request.url);

  const origin = request.headers.get("origin");
  console.log(`origin: ${origin}`);

  const userAgent = request.headers.get("User-Agent");
  console.log(`User-Agent: ${userAgent}`);

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
