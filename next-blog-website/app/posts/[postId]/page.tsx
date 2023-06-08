import { getSortedPostsData } from "@/lib/posts";
import { notFound } from "next/navigation";

type Props = {
  params: {
    postId: string;
  };
};

export default function PostPage({ params }: Props) {
  const posts = getSortedPostsData();
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }

  return <div>PostPage</div>;
}
