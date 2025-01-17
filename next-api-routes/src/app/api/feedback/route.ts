import { NextResponse } from "next/server";

type Feedback = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  // get data that is sent from request
  const data: Feedback = await request.json();

  const { name, email, message } = data;

  return NextResponse.json({ name, email, message });
}
