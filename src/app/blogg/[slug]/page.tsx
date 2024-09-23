import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import Article from "@/components/article";
import { ArrowLeftIcon } from "lucide-react";
import { format } from "date-fns";
import { sv } from "date-fns/locale/sv";

const postDirectory = path.join(process.cwd(), "posts");

export default async function Page(props: { params: { slug: string } }) {
  const fileContents = fs.readFileSync(
    postDirectory + `/${props.params.slug}.mdx`,
    "utf8",
  );

  const { data, content } = matter(fileContents);

  const mdxSource = await serialize(content, {
    scope: data,
  });

  return (
    <article className="max-w-screen-xl max-w-screen-none prose-sm sm:prose prose-neutral prose-a:underline-offset-2 prose-a:decoration-1 prose-a:text-blue-600 mx-auto text-balance prose-headings:font-sans prose-headings:font-semobold prose-h1:font-medium prose-h2:font-medium prose-headings:tracking-tight">
      <Link
        className="inline-flex items-center gap-1.5 font-sans"
        href="/blogg"
      >
        <ArrowLeftIcon size={16} /> <span>Alla blogginlägg</span>
      </Link>

      <h1>{data.title}</h1>

      <p className="!m-0 text-gray-400 font-sans">
        {format(data.date, "d MMMM yyyy", { locale: sv })}
      </p>

      <Article source={mdxSource} />

      <Link
        className="inline-flex items-center gap-1.5 font-sans"
        href="/blogg"
      >
        <ArrowLeftIcon size={16} /> <span>Alla blogginlägg</span>
      </Link>
    </article>
  );
}
