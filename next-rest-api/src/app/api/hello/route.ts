import { NextResponse } from "next/server";
import { limiter } from "../config/limiter";

export async function GET(request: Request) {
  const origin = request.headers.get("origin");
  const remaining = await limiter.removeTokens(1);
  console.log(`remaining: ${remaining}`);

  if (remaining < 0) {
    return new NextResponse(null, {
      status: 429,
      statusText: "Too Many Requests",
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Content-Type": "text/plain",
      },
    });
  }

  // * Loading Environment Variables https://nextjs.org/docs/app/building-your-application/configuring/environment-variables#loading-environment-variables
  const apiKey = process.env.DATA_API_KEY;

  return NextResponse.json({ message: "Hello, World!", api_key: apiKey });
}
