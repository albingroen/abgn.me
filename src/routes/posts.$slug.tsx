import { createFileRoute } from "@tanstack/react-router";
import { getPost } from "@/data/posts";
import { MDXContent } from "@content-collections/mdx/react";
import { ArticleLayout } from "@/components/article-layout";
import { format } from "date-fns";

export const Route = createFileRoute("/posts/$slug")({
  component: PostPage,

  loader: async ({ params }) => {
    const post = await getPost(params.slug);
    if (!post) {
      throw new Error("Post not found");
    }
    return { post };
  },

  head: ({ loaderData }) => {
    if (!loaderData) return {};

    const { post } = loaderData;
    const siteUrl = "https://abgn.me";
    const postUrl = `${siteUrl}/posts/${post.slug}`;
    const ogImage = post.image || `${siteUrl}/profile.png`;

    return {
      meta: [
        { title: `${post.title} | abgn.me` },
        { name: "description", content: post.excerpt || post.title },
        // Open Graph
        { property: "og:type", content: "article" },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt || post.title },
        { property: "og:url", content: postUrl },
        { property: "og:image", content: ogImage },
        { property: "og:site_name", content: "abgn.me" },
        { property: "article:published_time", content: post.date },
        { property: "article:author", content: post.author },
        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.title },
        { name: "twitter:description", content: post.excerpt || post.title },
        { name: "twitter:image", content: ogImage },
      ],
      links: [{ rel: "canonical", href: postUrl }],
    };
  },
});

function PostPage() {
  const { post } = Route.useLoaderData();

  return (
    <ArticleLayout
      header={
        <>
          <time className="text-gray-500">
            {format(new Date(post.date), "MMMM d, yyyy")}
          </time>
          <h1 className="text-4xl text-balance leading-tight">{post.title}</h1>
          {post.excerpt && (
            <p className="text-xl text-gray-400 text-balance leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </>
      }
    >
      <MDXContent code={post.mdx} />
    </ArticleLayout>
  );
}
