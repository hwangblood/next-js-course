export default async function getUser(userId: number) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!res.ok) throw new Error(`Failed to fetch user by id ${userId}`);

  return res.json();
}
