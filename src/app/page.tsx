import fs from "node:fs/promises";
import graymatter from "gray-matter";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// const POSTS = [
//   {
//     url: "/2021-work-from-home-setup",
//     label: "2021 work from home setup",
//   },
//   {
//     url: "/a-millennials-ideas-on-building-a-tech-company",
//     label: "A millennials ideas on building a tech company",
//   },
//   {
//     url: "/an-actually-usable-vim-setup",
//     label: "An actually usable vim setup",
//   },
//   {
//     url: "/goodbye-taskplane",
//     label: "Goodbye taskplane",
//   },
//   {
//     url: "/how-i-automated-my-dotfiles-screenshots",
//     label: "How i automated my dotfiles screenshots",
//   },
//   {
//     url: "/how-to-setup-ant-design-with-nextjs",
//     label: "How to setup ant design with nextjs",
//   },
//   {
//     url: "/how-to-write-prisma-in-vim",
//     label: "How to write prisma in vim",
//   },
//   {
//     url: "/i-build-self-tracker",
//     label: "I build self tracker",
//   },
//   {
//     url: "/i-built-a-command-k-component",
//     label: "I built a command k component",
//   },
//   {
//     url: "/i-spent-a-day-without-a-phone",
//     label: "I spent a day without a phone",
//   },
//   {
//     url: "/im-trying-out-sublime-text",
//     label: "Im trying out sublime text",
//   },
//   {
//     url: "/my-indie-projects",
//     label: "My indie projects",
//   },
//   {
//     url: "/my-ultimate-hacking-keyboard-review",
//     label: "My ultimate hacking keyboard review",
//   },
//   {
//     url: "/prisma-nextjs-and-postgres-pitfalls",
//     label: "Prisma nextjs and postgres pitfalls",
//   },
//   {
//     url: "/product-ideas",
//     label: "Product ideas",
//   },
//   {
//     url: "/react-mac-os-big-sur-loading-component",
//     label: "React mac os big sur loading component",
//   },
//   {
//     url: "/reducing-useStates-in-react",
//     label: "Reducing useStates in react",
//   },
//   {
//     url: "/setup-2024",
//     label: "Setup 2024",
//   },
//   {
//     url: "/svelte-and-prisma",
//     label: "Svelte and prisma",
//   },
//   {
//     url: "/the-real-win-with-tailwind",
//     label: "The real win with tailwind",
//   },
//   {
//     url: "/vscode-iterm-automatic-theme-switching",
//     label: "Vscode iterm automatic theme switching",
//   },
//   {
//     url: "/why-we-should-solve-our-own-problems",
//     label: "Why we should solve our own problems",
//   },
// ];

async function getPosts() {
  const files = await fs.readdir("src/posts");

  return Promise.all(
    files.map(async (file) => {
      return {
        ...graymatter(await fs.readFile(`src/posts/${file}`)),
        slug: file.replace(/\.mdx$/, ""),
      };
    }),
  );
}

export default async function Page() {
  const posts = await getPosts();

  return (
    <main className="w-full max-w-screen-md mx-auto px-6 py-20 space-y-20 text-balance">
      <section className="space-y-5">
        <div className="space-y-9">
          <Image
            width={64}
            height={64}
            className="w-16 h-16"
            src="/dither.png"
            alt=""
          />
          <h1 className="font-bold tracking-tight text-4xl">Hej!</h1>
        </div>
        <div className="space-y-2">
          <p>My name is Albin Groen.</p>
          <p>I&apos;m a self-taught designer turned developer.</p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          What do I do now?
        </h2>
        <p className="leading-relaxed">
          I design and build interfaces around audio at{" "}
          <a className="link" href="https://allears.ai/en">
            All Ears
          </a>{" "}
          since August 2024. I live with my partner in{" "}
          <a
            href="https://sv.wikipedia.org/wiki/V%C3%A4ster%C3%A5s"
            className="link"
            target="_blank"
          >
            Västerås
          </a>
          , and on my spare time I enjoy hiking, climbing, and{" "}
          <a target="_blank" className="link" href="https://glass.photo/abgn">
            taking photos
          </a>{" "}
          with my beloved Fujifilm.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">My projects</h2>

        <div className="space-y-8">
          <div className="space-y-4">
            <p className="leading-relaxed">
              I&apos;ve always been big on side-projects. It&apos;s a way for me
              to get my creative energy fulfilled outside of my day job.
            </p>
            <p className="leading-relaxed">
              Here is a small number of projects I&apos;ve recently worked on or
              am currently working on. You&apos;ll find more on{" "}
              <a href="https://github.com/albingroen">GitHub</a>
            </p>
          </div>

          <ul className="space-y-1">
            <li>
              <a
                target="_blank"
                href="https://prismabuilder.io"
                className="gap-0.5 hover:bg-gray-900 rounded-md px-4 py-3 -mx-4 -my-3 flex flex-col"
              >
                <p className="font-semibold leading-relaxed tracking-tight text-lg">
                  prismabuilder.io
                </p>
                <p className="leading-relaxed max-w-sm text-gray-400">
                  A graphical web interface for building Prisma database schemas
                  in an easier way.
                </p>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://react-cmdk.com"
                className="gap-0.5 hover:bg-gray-900 rounded-md px-4 py-3 -mx-4 -my-3 flex flex-col"
              >
                <p className="font-semibold leading-relaxed tracking-tight text-lg">
                  react-cmdk
                </p>
                <p className="leading-relaxed max-w-sm text-gray-400">
                  A React.js package for creating command palettes.
                </p>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/albingroen/quick.nvim"
                className="gap-0.5 hover:bg-gray-900 rounded-md px-4 py-3 -mx-4 -my-3 flex flex-col"
              >
                <p className="font-semibold leading-relaxed tracking-tight text-lg">
                  quick.nvim
                </p>
                <p className="leading-relaxed max-w-sm text-gray-400">
                  A lean and mean Neovim configuration in Lua.
                </p>
              </a>
            </li>
          </ul>

          <hr className="border-gray-800" />

          <div className="space-y-4">
            <a
              target="_blank"
              href="https://www.meetup.com/vasteras-datorklubb/?eventOrigin=event_home_page"
              className="flex gap-3.5 p-3 w-fit border border-gray-800 items-center hover:bg-gray-900 transition rounded-md"
            >
              <Image
                width={80}
                height={80}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded"
                src="/vdk-logo.png"
                alt=""
              />
              <div className="space-y-1 flex-1">
                <h3 className="font-medium sm:text-lg tracking-tight">
                  Västerås Datorklubb
                </h3>
                <p className="max-w-xs text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  For people interested in anything between hardware and
                  software.
                </p>
              </div>
              <ArrowRightIcon className="w-6 stroke-gray-600" />
            </a>
            <p className="text-sm text-gray-500 leading-relaxed">
              I organize a meetup group every other Wednesday night in my
              hometown where we meet up to work on side-projects, learn from
              each other, and just have fun.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          Where my thoughts go
        </h2>
        <p className="leading-relaxed">
          Writing is a necessary for me. There&apos;s too much floating around
          in that brain of mine. So, here you&apos;ll find anything and
          everything that comes to mind for me.
        </p>
        <ul className="space-y-2">
          {posts
            .sort((a, b) => {
              const aDate = new Date(a.data.date);
              const bDate = new Date(b.data.date);

              return bDate.getTime() - aDate.getTime();
            })
            .map((post) => (
              <li key={post.data.title}>
                <Link href={`/blog/${post.slug}`} className="link">
                  <p>{post.data.title}</p>
                </Link>
              </li>
            ))}
        </ul>
      </section>

      <section className="space-y-5">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            How can I reach you?
          </h2>
          <p className="leading-relaxed">
            I&apos;m always open to a chat. Do you need advice in your career?
            Do you have advice for me? Please feel free to reach out. It&apos;d
            only make me happy.
          </p>
        </div>

        <p className="leading-relaxed">
          Here&apos;s my{" "}
          <a className="link" href="mailto:albingroen@proton.me">
            email address
          </a>{" "}
          and here&apos;s my{" "}
          <a
            className="link"
            href="https://www.linkedin.com/in/albin-groen-689bbb305/"
          >
            LinkedIn
          </a>{" "}
          profile.
        </p>
      </section>

      <section className="space-y-5">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Socials</h2>
          <p>
            Yes, I&apos;m on social media. Posting isn&apos;t really my
            speciality, but I love to keep up with what&apos;s going on in the
            world around me. So, yes, you&apos;ll find me over there.
          </p>
        </div>

        <ul className="space-y-2">
          <li>
            <a className="link" href="https://github.com/albingroen">
              GitHub
            </a>
          </li>
          <li>
            <a className="link" href="https://bsky.app/profile/abgn.me">
              BlueSky
            </a>
          </li>
          <li>
            <a className="link" href="https://www.producthunt.com/@albin_groen">
              ProductHunt
            </a>
          </li>
          <li>
            <a className="link" href="https://layers.to/abgn">
              Layers (Design portfolio)
            </a>
          </li>
          <li>
            <a className="link" href="https://www.youtube.com/@albingroen">
              YouTube
            </a>
          </li>
          <li>
            <a className="link" href="https://www.twitch.tv/groenalbin">
              Twitch
            </a>
          </li>
          <li>
            <a
              className="link"
              href="https://news.ycombinator.com/user?id=albingroen"
            >
              Hackernews
            </a>
          </li>
          <li>
            <a className="link" href="https://read.cv/abgn">
              read.cv
            </a>
          </li>
        </ul>
      </section>

      <footer>
        Copyright © {new Date().getFullYear()} Albin Groen. All rights
        reserved.
      </footer>
    </main>
  );
}
