import React from "react";

async function getUser(userId: number) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!res.ok) throw new Error(`Failed to fetch user by id ${userId}`);

  return res.json();
}

async function getUserPosts(userId: number) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  if (!res.ok) throw new Error(`Failed to fetch posts of userId ${userId}`);

  return res.json();
}

type Props = {
  params: {
    userId: number;
  };
};

export default async function UserPage(props: Props) {
  const userId = props.params.userId;

  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);

  const [user, userPosts] = await Promise.all([userData, userPostsData]);

  return (
    <>
      <h2>user: {user.name}</h2>
      <br />
      <h3>posts: {userPosts.length}</h3>
    </>
  );
}
