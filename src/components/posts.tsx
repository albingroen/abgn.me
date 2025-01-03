"use client";

import { Post } from "@/types";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Posts(props: { posts: Post[] }) {
  const searchParams = useSearchParams();
  const isBlogOpen = searchParams.get("blog-open") === "true";

  return (
    <div>
      <ul className="space-y-10 sm:space-y-12">
        {props.posts
          .sort((a, b) => {
            const aDate = new Date(a.data.date);
            const bDate = new Date(b.data.date);

            return bDate.getTime() - aDate.getTime();
          })
          .slice(0, isBlogOpen ? props.posts.length : 3)
          .map((post) => (
            <li key={post.data.title}>
              <Link
                href={`/blog/${post.slug}`}
                className="flex flex-col-reverse sm:flex-row sm:items-start gap-6 sm:gap-8 group"
              >
                <div className="flex-1 space-y-3 sm:space-y-4">
                  <div className="space-y-1.5 sm:space-y-2">
                    <h4 className="text-xl font-semibold tracking-tight leading-normal">
                      {post.data.title}
                    </h4>
                    <p className="font-light leading-relaxed">
                      {post.data.excerpt}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500">
                    {format(new Date(post.data.date), "MMM d, yyyy")} ·{" "}
                    {post.data.author}
                  </p>
                </div>

                {post.data.image ? (
                  <Image
                    alt=""
                    width={1600}
                    height={800}
                    src={post.data.image}
                    className="aspect-video object-top object-cover sm:max-w-[15rem] rounded-md"
                  />
                ) : (
                  <div className="w-full sm:max-w-[15rem] aspect-video bg-gray-800 rounded-md" />
                )}
              </Link>
            </li>
          ))}
      </ul>

      <Link
        scroll={false}
        href={{ pathname: "/", query: { "blog-open": !isBlogOpen } }}
        className="p-2 rounded-md bg-gray-900 hover:bg-gray-800 transition hover:text-white text-center w-full mt-12 block"
      >
        {isBlogOpen ? "Show less" : "Show more"}
      </Link>
    </div>
  );
}
