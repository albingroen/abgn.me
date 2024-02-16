"use client";

import Link from "next/link";

export default function Error() {
  return (
    <div className="flex flex-col gap-4 items-start">
      <h1>Sorry, but this post does not exist</h1>
      <Link href="/" className="link">
        &larr; Go home
      </Link>
    </div>
  );
}
