export interface BlogPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface BlogPostWithHashtags extends BlogPost {
  hashtags: string[];
}
