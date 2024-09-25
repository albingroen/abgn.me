import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import Article from "@/components/article";
import { ArrowLeftIcon } from "lucide-react";
import { format } from "date-fns";
import { sv } from "date-fns/locale/sv";
import Image from "next/image";

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
    <article className="max-w-screen-md max-w-screen-none article">
      <Link
        className="inline-flex items-center gap-1.5 font-sans"
        href="/blogg"
      >
        <ArrowLeftIcon size={16} /> <span>Alla blogginlägg</span>
      </Link>

      <Image
        alt=""
        width={1920}
        height={1080}
        src={data.image}
        className="rounded"
      />

      <h1 className="!mt-12 !leading-tight">{data.title}</h1>

      <p className="text-muted-foreground-darker !text-xl font-sans">
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
