import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

type Props = {
  params: {
    id: string;
  };
};

// http://localhost:3000/api/todos/23
// http://localhost:3000/api/todos/2234  404 Not Found
export async function GET(request: Request, { params: { id } }: Props) {
  // const id = request.url.slice(request.url.lastIndexOf("/") + 1);

  const res = await fetch(`${DATA_SOURCE_URL}/${id}`);

  const todo: Todo = await res.json();

  if (!todo.id)
    return NextResponse.json(
      { message: "Todo not found" },
      { status: res.status }
    );

  return NextResponse.json(todo);
}
