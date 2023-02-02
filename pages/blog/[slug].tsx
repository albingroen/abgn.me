/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Seo from "../../components/Seo";
import matter from "gray-matter";
import { BlogPostFrontMatter } from "../../types";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
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
        <Link passHref href="/blog">
          <a className="link">&larr; All posts</a>
        </Link>

        <article className="mt-8 flex flex-col prose prose-neutral dark:prose-invert prose-headings:font-semibold prose-img:rounded-lg prose-img:border dark:prose-img:border-none max-w-none">
          <h1 className="text-3xl leading-normal !mb-0 !mt-0">
            {frontMatter.title}
          </h1>

          <p className="!text-neutral-500 !mb-0">{frontMatter.date}</p>

          <MDXRemote {...source} />
        </article>
      </div>
    </>
  );
}
