import { allPosts } from "content-collections";

export const getPosts = async () => {
  return allPosts.toSorted(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
};

export const getPost = async (slug: string) => {
  return allPosts.find((post) => post.slug === slug);
};
