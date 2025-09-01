import fs from "fs/promises";
import { ArrowLeftIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Type",
  description:
    "I have somewhat of an unusual interest in typefaces. Here, I collect photographs of ones I find in the world around me that I find good or interesting.",
};

export default async function Page() {
  const images = await fs.readdir("public/type");

  return (
    <main className="w-full max-w-screen-2xl mx-auto px-6 py-20 space-y-20 text-balance">
      <header className="max-w-screen-md mx-auto space-y-8">
        <Link href="/" className="flex items-center gap-1.5 link">
          <ArrowLeftIcon className="w-5" />
          <span>Back</span>
        </Link>

        <div className="space-y-5">
          <h1 className="font-bold tracking-tight text-4xl">Type</h1>

          <p>
            I have somewhat of an unusual interest in typefaces. Here, I collect
            photographs of ones I find in the world around me that I find good
            or interesting.
          </p>
        </div>
      </header>

      <div className="grid sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
        {images
          .filter((image) => image.endsWith(".jpeg"))
          .map((image) => (
            <Image
              width={1920}
              height={1080}
              src={`/type/${image}`}
              className="object-cover object-center rounded aspect-square"
              key={image}
              alt=""
            />
          ))}
      </div>
    </main>
  );
}
