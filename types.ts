export interface BlogPostFrontMatter {
  slug: string;
  title: string;
  date: string;
  updated?: string;
  author: string;
  excerpt: string;
  tags: string[];
  image: string;
}
