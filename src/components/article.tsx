"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Image from "next/image";

export default function Article(props: {
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
}) {
  return (
    <MDXRemote
      {...props.source}
      components={{
        a: (props) => (
          <a {...props} rel="noopener noreferrer" target="_blank" />
        ),
        img: (props) => (
          <Image
            {...props}
            alt={props.alt || ""}
            width={1280}
            height={720}
            src={props.src!}
          />
        ),
      }}
    />
  );
}
