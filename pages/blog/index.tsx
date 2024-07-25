/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Seo from "../../components/Seo";
import { BlogPostFrontMatter } from "../../types";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import {
  ArrowLeftIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { PROFILE_PHOTO, SITE_URL } from "../../lib/constants";
import { getSortedPosts } from "../../lib/posts";
import { useState } from "react";
import Image from "next/image";

const TITLE = "Blog";
const DESCRIPTION = "Sometimes I like to write about things";

export const getStaticProps: GetStaticProps<{
  posts: BlogPostFrontMatter[];
}> = () => {
  return {
    props: {
      posts: getSortedPosts(),
    },
  };
};

function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [search, setSearch] = useState<string>("");

  return (
    <>
      <Seo
        canonicalUrl={`${SITE_URL}/blog`}
        description={DESCRIPTION}
        url={`${SITE_URL}/blog`}
        title={TITLE}
      />

      <div className="max-w-screen-md mx-auto py-24 px-6 md:px-8">
        <header>
          <h1 className="text-6xl sm:text-7xl font-light selection-light relative leading-tight">
            {TITLE}
          </h1>

          <p className="mt-5 text-lg leading-relaxed">{DESCRIPTION}</p>

          <div className="relative mt-6">
            <MagnifyingGlassIcon className="absolute w-[18px] text-neutral-400 dark:text-neutral-500 left-0 top-1/2 transform -translate-y-1/2" />
            <input
              value={search}
              className="text-lg bg-transparent pl-7 py-3 w-full border-b border-neutral-300 dark:border-neutral-700 placeholder-neutral-400 dark:placeholder-neutral-500 focus:border-neutral-400 dark:focus:border-neutral-600 transition focus:outline-none rounded-none"
              placeholder="Search for a post..."
              onChange={(e) => {
                setSearch(e.currentTarget.value);
              }}
            />
          </div>
        </header>

        <div className="flex-1">
          <section className="md:mt-8 flex flex-col">
            <ul className="flex flex-col divide-y dark:divide-neutral-800">
              {posts
                .filter((post) =>
                  search
                    ? JSON.stringify(post)
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    : true
                )
                .map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex flex-col md:flex-row md:items-center group justify-between gap-6 md:gap-8 py-10"
                    >
                      <div className={post.image ? "w-72" : undefined}>
                        <h3 className="link-child dark:!text-white dark:!font-normal text-2xl mt-4 leading-relaxed">
                          {post.title}
                        </h3>
                        <p className="mt-2 text-neutral-500">{post.date}</p>
                      </div>

                      {post.image && (
                        <img
                          src={post.image}
                          className="object-cover object-top w-full md:w-[350px] rounded-md border dark:border-none"
                          loading="lazy"
                          alt=""
                        />
                      )}
                    </Link>
                  </li>
                ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}

export default Blog;
