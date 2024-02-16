import { Suspense } from "react";
import { compileMDX } from "next-mdx-remote/rsc";
import { promises as fs } from "fs";

interface PageProps {
  params: { slug: string };
}

export default async function Page({ params }: PageProps) {
  const file = await fs.readFile(
    process.cwd() + `/app/posts/${params.slug}.mdx`,
    "utf8",
  );

  const { content, frontmatter } = await compileMDX<{ title: string }>({
    source: file,
    options: { parseFrontmatter: true },
  });

  return (
    <Suspense fallback={<>Loading...</>}>
      <article className="prose prose-headings:font-semibold prose-lg dark:prose-invert prose-stone">
        <h1>{frontmatter.title}</h1>

        {content}
      </article>
    </Suspense>
  );
}
