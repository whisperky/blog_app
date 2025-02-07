import { BlogPost, BlogPostWithHashtags } from "../types/blog";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://jsonplaceholder.typicode.com";

export async function getAllPosts(): Promise<BlogPostWithHashtags[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`, {
      // Add cache settings for better static generation
      cache: "force-cache",
      next: {
        revalidate: 3600, // Revalidate every hour
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    const posts: BlogPost[] = await response.json();

    // Add random hashtags to posts (since JSONPlaceholder doesn't provide them)
    const hashtags = [
      "technology",
      "lifestyle",
      "programming",
      "travel",
      "food",
      "health",
    ];
    return posts.map((post) => ({
      ...post,
      hashtags: [
        hashtags[Math.floor(Math.random() * hashtags.length)],
        hashtags[Math.floor(Math.random() * hashtags.length)],
      ].filter((v, i, a) => a.indexOf(v) === i), // Remove duplicates
    }));
  } catch (error) {
    console.error("Error fetching all posts:", error);
    return [];
  }
}

export async function getPostById(
  id: number
): Promise<BlogPostWithHashtags | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
      cache: "force-cache",
      next: {
        revalidate: 3600, // Revalidate every hour
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch post");
    }
    const post: BlogPost = await response.json();

    // Add random hashtags to the post
    const hashtags = [
      "technology",
      "lifestyle",
      "programming",
      "travel",
      "food",
      "health",
    ];
    return {
      ...post,
      hashtags: [
        hashtags[Math.floor(Math.random() * hashtags.length)],
        hashtags[Math.floor(Math.random() * hashtags.length)],
      ].filter((v, i, a) => a.indexOf(v) === i), // Remove duplicates
    };
  } catch (error) {
    console.error(`Error fetching post ${id}:`, error);
    return null;
  }
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}
