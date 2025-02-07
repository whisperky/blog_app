"use client";

import { useEffect, useState } from "react";
import { BlogPostWithHashtags } from "../types/blog";
import { getAllPosts } from "../services/blogService";
import BlogCard from "../components/BlogCard";

export default function Home() {
  const [posts, setPosts] = useState<BlogPostWithHashtags[]>([]);
  const [selectedHashtags, setSelectedHashtags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getAllPosts();
        setPosts(fetchedPosts);
      } catch (_) {
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleHashtagClick = (tag: string) => {
    setSelectedHashtags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredPosts =
    selectedHashtags.length > 0
      ? posts.filter((post) =>
          post.hashtags.some((tag) => selectedHashtags.includes(tag))
        )
      : posts;

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Latest Blog Posts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <BlogCard
            key={post.id}
            post={post}
            onHashtagClick={handleHashtagClick}
            selectedHashtags={selectedHashtags}
          />
        ))}
      </div>
      {filteredPosts.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500">
            No posts found with the selected hashtags.
          </p>
        </div>
      )}
    </div>
  );
}
