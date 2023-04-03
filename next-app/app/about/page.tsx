import Link from "next/link";
import React from "react";

type Props = {};

export default function About({}: Props) {
  // throw Error("Unknown error"); // Uncomment to show an error, and see how Error Handling works
  return (
    <>
      <h1>About</h1>
      <Link href={"/"}>Back to Home Page</Link>
    </>
  );
}
