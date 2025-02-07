import { getPostById, getAllPosts } from "@/services/blogService";
import HashtagSection from "@/components/HashtagSelection";
import Link from "next/link";

// This replaces getStaticPaths
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

// This is the main page component that handles static generation
export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const postId = Number((await params).id);
  if (isNaN(postId)) {
    throw new Error("Invalid post ID");
  }

  const post = await getPostById(postId);

  if (!post) {
    throw new Error("Post not found");
  }

  return (
    <article className="max-w-3xl mx-auto">
      <Link
        href="/"
        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6"
      >
        ← Back to Posts
      </Link>
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <HashtagSection hashtags={post.hashtags} />
        <div className="prose max-w-none">
          <p className="text-gray-700 whitespace-pre-line">{post.body}</p>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Post ID: {post.id} • Author ID: {post.userId}
          </p>
        </div>
      </div>
    </article>
  );
}
