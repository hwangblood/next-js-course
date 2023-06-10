import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log("Middleware!");
  console.log(request.method);
  console.log(request.url);

  const origin = request.headers.get("origin");
  console.log(`origin: ${origin}`);

  const userAgent = request.headers.get("User-Agent");
  console.log(`User-Agent: ${userAgent}`);

  return NextResponse.next();
}
