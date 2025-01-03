export type Post = {
  content: string;
  slug: string;
  data: PostFrontMatter;
};

export type PostFrontMatter = {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  tags: string[];
  image?: string;
};
