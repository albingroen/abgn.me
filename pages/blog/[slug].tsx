import Article from "../../components/Article";
import Link from "next/link";
import Seo from "../../components/Seo";
import matter from "gray-matter";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { BlogPostFrontMatter } from "../../types";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { SITE_URL } from "../../lib/constants";
import { getAllPostSlugs, getPostdata } from "../../lib/posts";
import { serialize } from "next-mdx-remote/serialize";

export const getStaticProps: GetStaticProps<{
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
  frontMatter: BlogPostFrontMatter;
}> = async ({ params }) => {
  const source = await getPostdata(params?.slug as string);
  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data as BlogPostFrontMatter,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPostSlugs();

  return {
    paths,
    fallback: false,
  };
};

export default function BlogPost({
  source,
  frontMatter,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Seo
        canonicalUrl={`${SITE_URL}/blog/${frontMatter.slug}`}
        url={`${SITE_URL}/blog/${frontMatter.slug}`}
        description={frontMatter.excerpt}
        image={frontMatter.image}
        title={frontMatter.title}
      />

      <div className="max-w-screen-md mx-auto py-24 px-6 md:px-8">
        <Link href="/blog" className="link inline-flex items-center gap-2">
          <ArrowLeftIcon className="w-4" />
          <span>All posts</span>
        </Link>

        <Article frontMatter={frontMatter} source={source} />
      </div>
    </>
  );
}
