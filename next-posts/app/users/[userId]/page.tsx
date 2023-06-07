import { Suspense } from "react";
import { type Metadata } from "next";

import UserPosts from "./components/UserPosts";

async function getUser(userId: number) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!res.ok) throw new Error(`Failed to fetch user by id ${userId}`);

  return res.json();
}

async function getUserPosts(userId: number) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    {
      // this is the default, for dynamic request in the URL, caching data after the first request
      // cache: "force-cache",
      // but if data is changing constantly, we don't want always see the old data, for that can use dynamic caching
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error(`Failed to fetch posts of userId ${userId}`);

  return res.json();
}

type Props = {
  params: { userId: number };
};

export async function generateMetadata({
  params: { userId },
}: Props): Promise<Metadata> {
  const userData: Promise<User> = await getUser(userId);
  const user = await userData;

  return { title: user.name, description: `This is page of ${user.name}` };
}

export default async function UserPage({ params: { userId } }: Props) {
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);

  const user = await userData;

  return (
    <>
      <h1>{user.name}</h1>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        {/* @ts-expect-error Async Server Component */}
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
}
