/* eslint-disable @next/next/no-img-element */
import { readingTime } from "@/lib/utils";
import { format } from "date-fns";
import { sv } from "date-fns/locale/sv";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import path from "path";

const postDirectory = path.join(process.cwd(), "posts");

export default function Page() {
  const fileNames = fs.readdirSync(postDirectory);

  const allPostsData = fileNames.map((filename) => {
    const slug = filename.replace(".mdx", "");

    const fullPath = path.join(postDirectory, filename);
    //Extracts contents of the MDX file
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    const frontmatter = data as {
      title: string;
      date: string;
      excerpt: string;
      tags: string[];
      image?: string;
    };

    return {
      slug,
      readingTime: readingTime(fileContents),
      ...frontmatter,
    };
  });

  return (
    <div className="flex gap-10 items-start">
      <ul className="flex flex-col gap-12 flex-1">
        {allPostsData
          .sort((a, b) => {
            if (new Date(a.date) < new Date(b.date)) {
              return 1;
            } else {
              return -1;
            }
          })
          .map((post) => {
            return (
              <Link
                key={post.slug}
                href={`/blogg/${post.slug}`}
                className="flex flex-col bg-card rounded shadow-lg overflow-hidden border"
              >
                {post.image && (
                  <Image
                    alt=""
                    width={1280}
                    height={720}
                    src={post.image}
                    className="aspect-video object-cover object-center"
                  />
                )}

                <div className="space-y-3 p-5">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-medium tracking-tight text-balance leading-normal">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground text-balance leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <p className="text-muted-foreground-darker">
                    <span>
                      {format(post.date, "d MMMM yyyy", { locale: sv })}
                    </span>
                    &nbsp; &nbsp;
                    <span>·</span>
                    &nbsp; &nbsp;
                    <span>{post.readingTime.toFixed(0)} minuter lästid</span>
                  </p>
                </div>
              </Link>
            );
          })}
      </ul>

      <div className="flex-1 max-w-xs sticky top-[88px]">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, culpa
          illum. Excepturi hic libero laboriosam, veniam aliquam ullam illo
          facere quod voluptate quaerat? Veniam obcaecati recusandae vel
          repellendus praesentium? Ipsa.
        </p>
      </div>
    </div>
  );
}
