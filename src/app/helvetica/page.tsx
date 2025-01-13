import fs from "fs/promises";
import { ArrowLeftIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Helvetica",
  description:
    "I have somewhat of an unusual interest in the Helvetica typeface. Here, I collect photographs of it, taken from the real world.",
};

export default async function Page() {
  const images = await fs.readdir("public/helvetica");

  return (
    <main className="w-full max-w-screen-2xl mx-auto px-6 py-20 space-y-20 text-balance">
      <header className="max-w-screen-md mx-auto space-y-8">
        <Link href="/" className="flex items-center gap-1.5 link">
          <ArrowLeftIcon className="w-5" />
          <span>Back</span>
        </Link>

        <div className="space-y-5">
          <h1 className="font-bold tracking-tight text-4xl">Helvetica</h1>

          <p>
            I have somewhat of an unusual interest in the Helvetica typeface.
            Here, I collect photographs of it, taken from the real world.
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
              src={`/helvetica/${image}`}
              className="object-cover object-center rounded"
              key={image}
              alt=""
            />
          ))}
      </div>
    </main>
  );
}
