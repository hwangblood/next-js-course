import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <p>
        {/* When mouse over on this link, 
        the component of the page will be pre-rendered, 
        although you haven't click on it. */}
        <Link href={"/users"}>Users</Link>
      </p>
    </main>
  );
}
