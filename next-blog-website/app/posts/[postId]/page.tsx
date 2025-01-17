import getFormattedDate from "@/lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const posts = getSortedPostsData(); // deduped!

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params }: Props) {
  const posts = getSortedPostsData(); // deduped!
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return { title: post.title };
}

type Props = {
  params: {
    postId: string;
  };
};

export default async function PostPage({ params }: Props) {
  const posts = getSortedPostsData(); // deduped!
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }

  const { title, date, contentHtml } = await getPostData(postId);
  const pubDate = getFormattedDate(date);

  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
      <h1 className="text-3xl mt-4 mb-0">{title}</h1>
      <p className="mt-0">{pubDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href="/">← Back to home</Link>
        </p>
      </article>
    </main>
  );
}
