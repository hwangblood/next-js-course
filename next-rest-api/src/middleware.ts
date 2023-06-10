import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/*
 * Routing: Middleware | Next.js
 * https://nextjs.org/docs/app/building-your-application/routing/middleware
 */
const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["http://www.yoursite.com", "http://yoursite.com"]
    : ["http://localhost:3000", "https://www.google.com"];

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const origin = request.headers.get("origin");
  // If the origin is not allowed, or no origin (postman, thunderclient)
  if ((origin && !allowedOrigins.includes(origin)) || !origin) {
    return new NextResponse(null, {
      status: 400,
      statusText: "Bad Request",
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

  const regex = new RegExp("/api/todos/*");
  // check whether not match the regex pattern, /api/hello
  if (!regex.test(request.url)) {
    console.log("request url is not of todo api");
  }

  console.log("Middleware!");
  console.log(request.method);
  console.log(request.url);

  const userAgent = request.headers.get("User-Agent");
  console.log(`User-Agent: ${userAgent}`);

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
