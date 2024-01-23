import Article from "../components/Article";
import Link from "next/link";
import Seo from "../components/Seo";
import fs from "fs";
import matter from "gray-matter";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { BlogPostFrontMatter } from "../types";
import { InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";

export default function Uses({
  source,
  frontMatter,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Seo
        title={frontMatter.title}
        url="https://abgn.me/uses"
        description={frontMatter.excerpt}
        canonicalUrl="https://abgn.me/uses"
        image="https://res.cloudinary.com/albin-groen/image/upload/f_auto,q_auto/v1706026237/uses-seo_gx3k3u.png"
      />

      <div className="max-w-screen-md mx-auto py-24 px-6 md:px-8">
        <Link href="/" className="link inline-flex items-center gap-2">
          <ArrowLeftIcon className="w-4" />
          <span>Home</span>
        </Link>

        <Article frontMatter={frontMatter} source={source} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const source = fs.readFileSync("uses.mdx", "utf8");

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    scope: data,
  });

  return {
    props: { source: mdxSource, frontMatter: data as BlogPostFrontMatter },
  };
}
