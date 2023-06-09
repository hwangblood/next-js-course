import { NextRequest, NextResponse } from "next/server";

const DATA_SOURCE_URL = "http://jsonplaceholder.typicode.com/todos";

const API_KEY: string = process.env.DATA_API_KEY as string;

export async function GET(request: Request) {
  const res = await fetch(DATA_SOURCE_URL);

  const todos: Todo[] = await res.json();

  return NextResponse.json(todos);
}

export async function DELETE(request: Request) {
  // ! error SyntaxError: Unexpected end of JSON input https://github.com/vercel/next.js/issues/48096
  const { id }: Partial<Todo> = await request.json(); // error

  if (!id) return NextResponse.json({ message: "Todo id required" });

  await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      // * this "API-Key" is not required for jsonplaceholder, it just a demo
      "API-Key": API_KEY,
    },
  });

  return NextResponse.json({ message: `Todo ${id} deleted successfully` });
}
