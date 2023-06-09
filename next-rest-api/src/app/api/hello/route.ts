import { NextResponse } from "next/server";

export function GET(request: Request) {
  // * Loading Environment Variables https://nextjs.org/docs/app/building-your-application/configuring/environment-variables#loading-environment-variables
  const apiKey = process.env.DATA_API_KEY;

  return NextResponse.json({ message: "Hello, World!", api_key: apiKey });
}
