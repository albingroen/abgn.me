import { format, formatDistanceToNow } from "date-fns";
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
    <article className="mt-8 flex flex-col prose prose-neutral dark:prose-invert prose-headings:font-normal prose-lg prose-img:rounded-lg max-w-none prose-a:decoration-1 prose-a:text-indigo-600 prose-a:decoration-dashed prose-a:underline-offset-4">
      <h1 className="text-5xl !font-light leading-normal !mb-0 !mt-0 text-balance">
        {frontMatter.title}
      </h1>

      <div className="flex items-center gap-2">
        <p className="!text-neutral-500 !mb-0">
          Published {format(new Date(frontMatter.date), "MMMM d, yyyy")}
        </p>

        {frontMatter.updated && (
          <>
            <p className="!text-neutral-500 !mb-0">·</p>

            <p className="!text-neutral-500 !mb-0">
              Updated{" "}
              {formatDistanceToNow(new Date(frontMatter.updated), {
                addSuffix: true,
              })}
            </p>
          </>
        )}
      </div>

      <MDXRemote
        {...source}
        components={{
          a: (props) => (
            <a {...props} rel="noopener noreferrer" target="_blank" />
          ),
        }}
      />
    </article>
  );
}
