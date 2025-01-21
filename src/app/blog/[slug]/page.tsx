import graymatter from "gray-matter";
import { ArrowLeftIcon } from "lucide-react";
import { format } from "date-fns";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import fs from "node:fs/promises";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { data, content } = graymatter(
    await fs.readFile(`src/posts/${slug}.mdx`),
  );

  return (
    <article className="w-full max-w-screen-md mx-auto px-6 py-20 text-balance prose dark:prose-invert prose-a:link prose-headings:font-semibold prose-headings:tracking-tight">
      <Link href="/" className="flex items-center gap-1.5">
        <ArrowLeftIcon className="w-5" />
        <span>Back</span>
      </Link>
      <div className="space-y-6 mt-8">
        <div className="space-y-2">
          <h1 className="m-0 leading-tight">{data.title}</h1>
          <p className="text-gray-500 text-lg">{data.excerpt}</p>
        </div>
        <div className="flex items-center gap-3">
          <Image
            alt=""
            width={48}
            height={48}
            src="/dither.png"
            className="w-12 h-12 rounded-full m-0"
          />
          <div>
            <p className="m-0 font-medium">{data.author}</p>
            <p className="m-0 text-sm text-gray-500">
              {format(new Date(data.date), "MMM d, yyyy")}
            </p>
          </div>
        </div>
      </div>
      <div>
        <MDXRemote source={content} />
      </div>

      <footer className="mt-20">
        Copyright © {new Date().getFullYear()} Albin Groen. All rights
        reserved.
      </footer>
    </article>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { data } = graymatter(
    await fs.readFile(`src/posts/${(await params).slug}.mdx`),
  );

  const metadata: Metadata = {
    title: data.title,
    openGraph: {
      images: {
        url: data.image,
      },
    },
    description: data.excerpt,
  };

  return metadata;
}

export async function generateStaticParams() {
  const files = await fs.readdir("src/posts");

  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, ""),
  }));
}

export const dynamicParams = false;
