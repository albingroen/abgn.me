/* eslint-disable @next/next/no-img-element */
import { format } from "date-fns";
import { sv } from "date-fns/locale/sv";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import { Fragment } from "react";

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
      ...frontmatter,
    };
  });

  return (
    <>
      <h1>Blogg</h1>

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
            <Fragment key={post.slug}>
              <hr />

              <Link
                href={`/blogg/${post.slug}`}
                className="!no-underline flex flex-col sm:flex-row m-0 gap-7"
              >
                {post.image && (
                  <Image
                    alt=""
                    width={1280}
                    height={720}
                    src={post.image}
                    className="bg-gray-100 !m-0 sm:w-64 object-contain object-center"
                  />
                )}

                <div className="flex flex-col justify-center gap-3 flex-1">
                  <h2 className="!m-0">{post.title}</h2>
                  <p className="!m-0 text-gray-600">{post.excerpt}</p>

                  <p className="!m-0 text-gray-400 font-sans">
                    {format(post.date, "d MMMM yyyy", { locale: sv })}
                  </p>
                </div>
              </Link>
            </Fragment>
          );
        })}
    </>
  );
}
