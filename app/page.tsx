import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import Link from "next/link";

export default async function Home() {
  const files = await fs.readdir(process.cwd() + `/app/posts`, "utf8");

  const notes = await Promise.all(
    files
      ?.filter((file) => file.endsWith(".mdx"))
      .map(async (note) => {
        const details = await fs.readFile(
          process.cwd() + `/app/posts/${note}`,
          "utf8",
        );

        return {
          ...(await compileMDX<{ title: string }>({
            source: details,
            options: { parseFrontmatter: true },
          })),
          slug: note.split(".mdx")?.[0],
        };
      }),
  );

  console.log(notes);

  return (
    <div>
      <h1 className="text-6xl font-semibold">Hej, I&apos;m Albin Groen</h1>

      <p className="text-xl mt-10 leading-relaxed max-w-screen-md">
        My name is Albin, and I work as a software engineer in Stockholm,
        Sweden. I enjoy writing about tech or design, and fiddle with
        side-projects.
      </p>

      <ul className="mt-10 list-inside list-disc">
        {notes.map((note) => (
          <li key={note.slug}>
            <Link className="link" href={`/posts/${note.slug}`}>
              {note.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
