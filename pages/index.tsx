/* eslint-disable @next/next/no-img-element */
import Footer from "../components/Footer";
import Link from "next/link";
import Seo from "../components/Seo";
import {
  ArrowRightIcon,
  CubeIcon,
  ExternalLinkIcon,
  StarIcon,
} from "@heroicons/react/solid";
import { ClipboardIcon } from "@heroicons/react/outline";
import { Fragment, useEffect, useState } from "react";
import { PROFILE_PHOTO } from "../lib/constants";

const sandboxes = [
  {
    title: "Slider",
    href: "/slider",
  },
  {
    title: "Emoji picker",
    href: "/emoji-picker",
  },
  {
    title: "Inline comment",
    href: "/inline-comment",
  },
  {
    title: "Copy to clipboard",
    href: "/copy-clipboard-feedback",
  },
  {
    title: "Progress",
    href: "/progress",
  },
  {
    title: "Tabs",
    href: "/tabs",
  },
];

const links = [
  {
    label: "Twitter",
    href: "https://twitter.com/albingroen",
  },
  {
    label: "GitHub",
    href: "https://github.com/albingroen",
  },
  {
    label: "Dribbble",
    href: "https://dribbble.com/albingroen",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCNnhfUD_dc9kFV9kBtsqGNw",
  },
  {
    label: "Email",
    href: "mailto:albin.groen@gmail.com",
  },
  {
    label: "Blog",
    href: "https://blog.abgn.me",
  },
];

const workHistory = [
  {
    heading: "Demando",
    startYear: "2021",
    endYear: "Current",
    website: "https://demando.io",
    lede: "Lead Frontend Developer",
  },
  {
    heading: "Dooer",
    startYear: "2019",
    endYear: "2021",
    website: "https://dooer.se",
    lede: "Web Developer",
  },
  {
    heading: "Wopify",
    startYear: "2018",
    endYear: "2019",
    lede: "FullStack Developer",
  },
];

const projects = [
  {
    image:
      "https://res.cloudinary.com/albin-groen/image/upload/v1675554630/notary-ios-seo_ckjjmj.png",
    lede: "Stores and encrypts your notes on-device to keep them as safe as possible.",
    href: "https://getnotary.app/ios",
    heading: "Notary for iOS",
  },
  {
    image:
      "https://res.cloudinary.com/albin-groen/image/upload/v1666376433/seo_wogf0x.png",
    lede: "Fast, desktop-first & Vim-friendly markdown editor",
    href: "https://getnotary.app",
    heading: "Notary",
  },
  {
    image:
      "https://res.cloudinary.com/albin-groen/image/upload/w_1000/v1657094651/taskplane-private-beta_grsq47.png",
    lede: "Powerful & user-friendly project management for the modern age",
    href: "https://taskplane.app",
    heading: "Taskplane",
  },
  {
    image:
      "https://res.cloudinary.com/albin-groen/image/upload/w_1000/v1654800612/react-cmdk-og_yyd4kb.png",
    lede: "React package for integrating a command palette into your app",
    href: "https://react-cmdk.com/",
    heading: "react-cmdk",
  },
  {
    image:
      "https://res.cloudinary.com/albin-groen/image/upload/v1637839182/psb-seo_m65tjk.png",
    lede: "Build your Prisma schema visually in this easy-to-use web based tool ",
    href: "https://prismabuilder.io",
    heading: "Prisma Schema Builder",
  },
  {
    image:
      "https://res.cloudinary.com/albin-groen/image/upload/w_1000/v1652769058/coinpeek-seo_xcf1iv.png",
    lede: "A macOS application for keeping up with crypto currency prices",
    href: "https://coinpeek.app",
    heading: "Coinpeek",
  },
];

export default function Home() {
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/albingroen/repos?sort=pushed")
      .then((res) => res.json())
      .then((res) => {
        setRepos(res);
      });
  }, []);

  return (
    <>
      <Seo />

      <div className="max-w-screen-md mx-auto py-24 px-8">
        <header>
          <img
            className="w-20 h-20 rounded-full object-center object-cover mt-20"
            src={PROFILE_PHOTO}
            alt=""
          />

          <h1 className="text-3xl font-semibold mt-6">Albin Groen</h1>

          <p className="mt-2.5 font-medium">Builder and Designer</p>

          <p className="mt-5 leading-relaxed">
            Combining engineering and design to come up with beautiful and
            easy-to-use solutions for individuals and companies. Currently
            leading frontend development at Demando.
          </p>

          <img
            className="mt-10 rounded-lg object-center object-cover md:w-2/3 hover:transform hover:scale-110 hover:rotate-2 hover:shadow-2xl hover:shadow-neutral-200 dark:hover:shadow-black transition dark:brightness-75"
            alt="Map of the great Stockholm region"
            src="/map.png"
          />
        </header>

        <div className="flex-1">
          <section className="mt-14">
            <h2 className="text-lg font-semibold">Links</h2>

            <div className="flex mt-4 items-center gap-5 flex-wrap">
              {links.map((link) => (
                <a
                  className="underline font-medium text-neutral-600 dark:text-neutral-400 dark:hover:text-white transition underline-offset-2"
                  rel="noopener noreferrer"
                  href={link.href}
                  key={link.href}
                  target="_blank"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-lg font-semibold">Sandbox</h2>

            <div className="flex items-center gap-3 flex-wrap mt-5">
              {sandboxes.map((sandbox) => (
                <Link href={sandbox.href} key={sandbox.title} passHref>
                  <a
                    className="border border-slate-200 dark:border-slate-700 rounded-md p-3 w-full sm:max-w-xs bg-white dark:bg-slate-800 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition block group flex items-center justify-between hover:border-slate-300 dark:hover:border-slate-600 group"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 bg-gray-100 dark:bg-slate-700 dark:group-hover:bg-slate-600 transition rounded-md flex items-center justify-center">
                        <CubeIcon className="w-5 text-neutral-500 dark:text-slate-400 dark:group-hover:text-slate-300 transition" />
                      </div>

                      <h4 className="font-medium leading-none">
                        {sandbox.title}
                      </h4>
                    </div>

                    <ArrowRightIcon className="w-5 text-slate-400 opacity-0 group-hover:opacity-100 transform -translate-x-5 group-hover:translate-x-0 transition" />
                  </a>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-lg font-semibold">Open source work</h2>

            <ul className="mt-5 h-[300px] overflow-y-auto shadow-inner rounded-md border border-slate-200 dark:border-neutral-700 rounded-md divide-y dark:divide-neutral-700">
              {repos
                ?.sort((a, b) => b.stargazers_count - a.stargazers_count)
                .map((repo) => (
                  <li key={repo.id}>
                    <a
                      className="p-4 group hover:bg-slate-50 dark:hover:bg-neutral-800 transition block"
                      rel="noopener noreferrer"
                      href={repo.html_url}
                      target="_blank"
                    >
                      <h5 className="font-semibold dark:font-medium text-blue-700 dark:text-indigo-300 group-hover:underline">
                        {repo.name}
                      </h5>

                      <p className="mt-1.5 text-sm text-slate-700 dark:text-neutral-400">
                        {repo.description}
                      </p>

                      <div className="flex gap-3 items-center">
                        <div
                          title={`${repo.stargazers_count} stars`}
                          className="flex items-center gap-1 mt-4"
                        >
                          <p className="font-medium leading-none text-sm text-slate-700 dark:text-neutral-400">
                            {repo.stargazers_count}
                          </p>
                          <StarIcon className="w-3.5 text-yellow-500" />
                        </div>

                        <div
                          title={`${repo.forks_count} forks`}
                          className="flex items-center gap-1 mt-4"
                        >
                          <p className="font-medium leading-none text-sm text-slate-700 dark:text-neutral-400">
                            {repo.forks_count}
                          </p>
                          <ClipboardIcon className="w-3.5 text-slate-500 dark:text-neutral-500" />
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
            </ul>
          </section>

          <section className="mt-16">
            <h2 className="text-lg font-semibold">Writing</h2>

            <Link href="/blog" passHref>
              <a
                className="inline-flex items-center gap-1 underline underline-offset-2 text-neutral-600 dark:text-neutral-400 dark:hover:text-white transition mt-4 group"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="font-medium">Albins&apos; blog</span>
                <ExternalLinkIcon className="w-4 text-neutral-600 dark:text-neutral-500 dark:group-hover:text-white transition" />
              </a>
            </Link>
          </section>

          <section className="mt-16">
            <h2 className="text-lg font-semibold">Photos</h2>

            <Link href="/photos" passHref>
              <a
                className="inline-flex items-center gap-1 underline underline-offset-2 text-neutral-600 dark:text-neutral-400 dark:hover:text-white transition mt-4 group"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="font-medium">Photos</span>
                <ExternalLinkIcon className="w-4 text-neutral-600 dark:text-neutral-500 dark:group-hover:text-white transition" />
              </a>
            </Link>
          </section>

          <section className="mt-16">
            <h2 className="text-lg font-semibold">Work</h2>

            <ul className="flex flex-col mt-5 gap-2">
              {workHistory.map((workItem, i) => (
                <Fragment key={workItem.heading}>
                  {i ? (
                    <div className="h-8 w-px border-r-2 border-neutral-300 dark:border-neutral-700 border-dashed ml-11 -mt-6"></div>
                  ) : null}

                  <li className="flex items-start gap-2">
                    <p className="text-neutral-500 dark:text-neutral-400 w-32 font-medium tracking-tight">
                      {workItem.startYear} - {workItem.endYear}
                    </p>

                    <div className="flex flex-col gap-1">
                      <a
                        className={`text-neutral-600 dark:text-white font-medium ${
                          workItem.website ? "underline" : ""
                        }`}
                        rel="noopener noreferrer"
                        href={workItem.website}
                        target="_blank"
                      >
                        {workItem.heading}
                      </a>

                      <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
                        {workItem.lede}
                      </p>
                    </div>
                  </li>
                </Fragment>
              ))}
            </ul>
          </section>

          <section className="mt-16">
            <h2 className="text-lg font-semibold">Projects</h2>

            <ul className="mt-6 grid md:grid-cols-2 gap-10">
              {projects.map((project) => (
                <li key={project.image}>
                  <a
                    className="flex flex-col gap-5 items-start group"
                    rel="noopener noreferrer"
                    href={project.href}
                    target="_blank"
                  >
                    <img
                      className="w-full rounded-md object-center object-cover h-[200px]"
                      src={project.image}
                      alt=""
                    />

                    <div className="flex flex-col gap-1.5">
                      <h5 className="group-hover:underline font-medium text-lg">
                        {project.heading}
                      </h5>

                      <p className="neutral-500">{project.lede}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
}
