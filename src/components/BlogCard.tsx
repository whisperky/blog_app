import Link from "next/link";
import { BlogPostWithHashtags } from "@/types/blog";
import { truncateText } from "@/services/blogService";
import HashtagButton from "./HashtagButton";

interface BlogCardProps {
  post: BlogPostWithHashtags;
  onHashtagClick: (tag: string) => void;
  selectedHashtags: string[];
}

export default function BlogCard({
  post,
  onHashtagClick,
  selectedHashtags,
}: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <Link href={`/post/${post.id}`}>
          <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-indigo-600">
            {post.title}
          </h2>
        </Link>
        <p className="text-gray-600 mb-4">{truncateText(post.body, 100)}</p>
        <div className="flex flex-wrap">
          {post.hashtags.map((tag) => (
            <HashtagButton
              key={tag}
              tag={tag}
              isSelected={selectedHashtags.includes(tag)}
              onClick={onHashtagClick}
            />
          ))}
        </div>
        <div className="mt-4">
          <Link
            href={`/post/${post.id}`}
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}
