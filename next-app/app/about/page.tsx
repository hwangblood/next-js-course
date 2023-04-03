import Link from "next/link";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <>
      <h1>About</h1>
      <Link href={"/"}>Back to Home Page</Link>
    </>
  );
}
