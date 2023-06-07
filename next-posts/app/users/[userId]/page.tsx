import { Suspense } from "react";
import { type Metadata } from "next";

import UserPosts from "./components/UserPosts";
import getUserPosts from "@/lib/getUserPosts";
import getUser from "@/lib/getUser";
import getAllUsers from "@/lib/getAllUsers";

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
// * Generating Static Params - Convert SSR to SSG
// * https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#generating-static-params
export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  return users.map((user) => ({
    userId: user.id.toString(),
  }));
}
