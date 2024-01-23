import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { BlogPostFrontMatter } from "../types";

interface ArticleProps {
  frontMatter: BlogPostFrontMatter;
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
}

export default function Article({ frontMatter, source }: ArticleProps) {
  return (
    <article className="mt-8 flex flex-col prose prose-neutral dark:prose-invert prose-headings:font-normal prose-lg prose-img:rounded-lg max-w-none">
      <h1 className="text-5xl !font-light leading-normal !mb-0 !mt-0">
        {frontMatter.title}
      </h1>

      <p className="!text-neutral-500 !mb-0">{frontMatter.date}</p>

      <MDXRemote {...source} />
    </article>
  );
}
