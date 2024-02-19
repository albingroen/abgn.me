import Image from "next/image";
import Link from "next/link";
import { calculateReadingTime } from "../lib/reading-time";
import { compileMDX } from "next-mdx-remote/rsc";
import { format } from "date-fns";
import { promises as fs } from "fs";
import classNames from "@/lib/class-names";

export default async function Home() {
  const files = await fs.readdir(process.cwd() + `/posts`, "utf8");

  const notes = (
    await Promise.all(
      files
        ?.filter((file) => file.endsWith(".mdx"))
        .map(async (note) => {
          const text = await fs.readFile(
            process.cwd() + `/posts/${note}`,
            "utf8",
          );

          return {
            ...(await compileMDX<{
              excerpt: string;
              image?: string;
              title: string;
              date: string;
            }>({
              source: text,
              options: { parseFrontmatter: true },
            })),
            slug: note.split(".mdx")?.[0],
            readingTime: calculateReadingTime(text),
          };
        }),
    )
  ).sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime(),
  );

  return (
    <div>
      <h1 className="text-6xl font-semibold">Hej, I&apos;m Albin</h1>

      <p className="text-xl mt-10 leading-relaxed max-w-screen-md">
        My name is Albin, and I work as a software engineer in Stockholm,
        Sweden. I enjoy writing about tech and design, and fiddle with
        side-projects.
      </p>

      <ul className="mt-10 flex flex-col -mx-6">
        {notes.map((note) => (
          <li key={note.slug}>
            <Link
              className="flex items-center group p-6 gap-10 rounded-md"
              href={`/posts/${note.slug}`}
            >
              <div className="flex-1 flex flex-col gap-4">
                <h3
                  className={classNames(
                    "text-4xl font-medium text-balance underline-offset-4 transition decoration-1 group-hover:underline",
                    "decoration-gray-400 group-hover:text-gray-500",
                    "dark:decoration-gray-500 dark:group-hover:text-gray-400",
                  )}
                >
                  {note.frontmatter.title}
                </h3>

                <p className="text-gray-500">
                  {format(note.frontmatter.date, "MMMM yyyy")}&nbsp; · &nbsp;
                  {note.readingTime
                    ? `${note.readingTime} minute`
                    : "Less than a minute"}{" "}
                  read
                </p>

                {note.frontmatter.title !== note.frontmatter.excerpt && (
                  <p className="text-gray-600 dark:text-gray-400 text-balance">
                    {note.frontmatter.excerpt}
                  </p>
                )}
              </div>

              {note.frontmatter.image ? (
                <div className="flex-1">
                  <Image
                    src={note.frontmatter.image}
                    className="rounded-md aspect-video object-center object-cover"
                    height={1080}
                    width={1920}
                    alt=""
                  />
                </div>
              ) : (
                <div className="rounded-md flex-1 aspect-video bg-gray-800" />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
