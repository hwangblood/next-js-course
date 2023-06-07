export default async function getUserPosts(userId: number) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    {
      // * this is the default, for dynamic request in the URL, caching data after the first request
      // cache: "force-cache",
      // *but if data is changing constantly, we don't want always see the old data, for that can use dynamic caching
      // cache: "no-store",

      // * ISR (incremental static regeneration), we want to go ahead and create the page and just check every so often to see if there's an update, https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#revalidating-data

      next: {
        // * Segment-level Caching https://nextjs.org/docs/app/building-your-application/data-fetching/caching#segment-level-caching
        revalidate: 60,
      },
    }
  );
  if (!res.ok) throw new Error(`Failed to fetch posts of userId ${userId}`);

  return res.json();
}
