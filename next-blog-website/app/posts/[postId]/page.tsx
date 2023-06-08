import { getSortedPostsData } from "@/lib/posts";
import { notFound } from "next/navigation";

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

export default function PostPage({ params }: Props) {
  const posts = getSortedPostsData(); // deduped!
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }

  return <div>PostPage</div>;
}
