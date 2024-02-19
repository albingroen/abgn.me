import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { TagIcon } from "lucide-react";
import { compileMDX } from "next-mdx-remote/rsc";
import { format } from "date-fns";
import { promises as fs } from "fs";

interface PageProps {
  params: { slug: string };
}

export default async function Page({ params }: PageProps) {
  const file = await fs.readFile(
    process.cwd() + `/posts/${params.slug}.mdx`,
    "utf8",
  );

  const { content, frontmatter } = await compileMDX<{
    tags: string[];
    author: string;
    title: string;
    date: string;
  }>({
    source: file,
    options: { parseFrontmatter: true },
    components: {
      img(props) {
        return (
          <a
            target="_blank"
            className="block rounded-md cursor-zoom-in"
            href={props.src}
          >
            <Image
              width={1920}
              height={1080}
              className={props.className}
              src={props.src || ""}
              alt={props.alt || ""}
            />
          </a>
        );
      },
      a(props) {
        return <a {...props} className="link" />;
      },
    },
  });

  return (
    <Suspense fallback={<>Loading...</>}>
      <article className="">
        <Link href="/" className="link">
          &larr; Home
        </Link>

        <h1 className="mt-8 text-6xl font-semibold text-balance">
          {frontmatter.title}
        </h1>

        <div className="flex gap-2 mt-5 items-center">
          <p className="text-gray-500">
            {format(frontmatter.date, "MMMM yyyy")}
          </p>

          <span className="text-gray-500">·</span>

          <p className="text-gray-500">By {frontmatter.author}</p>

          {frontmatter.tags.length ? (
            <>
              <span className="text-gray-500">·</span>

              <TagIcon size={20} />

              {frontmatter.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/?tag=${tag}`}
                  className="link capitalize"
                >
                  {tag}
                </Link>
              ))}
            </>
          ) : null}
        </div>

        <div className="mt-10 max-w-none prose prose-headings:font-semibold prose-lg dark:prose-invert prose-stone prose-img:rounded-md">
          {content}
        </div>
      </article>
    </Suspense>
  );
}
