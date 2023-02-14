/* eslint-disable @next/next/no-img-element */
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import Seo from "../components/Seo";
import classNames from "../lib/classNames";
import {
  AdjustmentsHorizontalIcon,
  ArrowRightIcon,
  ChatBubbleLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClipboardIcon,
  FaceSmileIcon,
  RocketLaunchIcon,
  TableCellsIcon,
} from "@heroicons/react/24/outline";
import { ArrowUpIcon, CheckIcon } from "@heroicons/react/20/solid";
import { PROFILE_PHOTO } from "../lib/constants";
import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { differenceInMonths } from "date-fns";

const REPO_SPACING = 12;

const REPO_WIDTH = 384;

const sandboxes = [
  {
    title: "Slider",
    href: "/slider",
    icon: AdjustmentsHorizontalIcon,
  },
  {
    title: "Emoji picker",
    href: "/emoji-picker",
    icon: FaceSmileIcon,
  },
  {
    title: "Inline comment",
    href: "/inline-comment",
    icon: ChatBubbleLeftIcon,
  },
  {
    title: "Copy to clipboard",
    href: "/copy-clipboard-feedback",
    icon: ClipboardIcon,
  },
  {
    title: "Progress",
    href: "/progress",
    icon: RocketLaunchIcon,
  },
  {
    title: "Tabs",
    href: "/tabs",
    icon: TableCellsIcon,
  },
];

const links = [
  {
    label: "Twitter",
    href: "https://twitter.com/albingroen",
    className: "text-[#439CE7]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="transparent"
        stroke="currentColor"
        strokeWidth={0.75}
        className="w-10 h-10 sm:w-12 sm:h-12"
      >
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/albingroen",
    className: "dark:text-white",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={0.5}
        className="w-10 h-10 sm:w-12 sm:h-12"
      >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    ),
  },
  {
    label: "Dribbble",
    href: "https://dribbble.com/albingroen",
    className: "text-[#D25A85]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={0.75}
        className="w-10 h-10 sm:w-12 sm:h-12"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCNnhfUD_dc9kFV9kBtsqGNw",
    className: "text-[#EE391C]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={0.5}
        className="h-[53px] w-[53px]"
      >
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
      </svg>
    ),
  },
];

const workHistory = [
  {
    heading: "Demando",
    startYear: "Aug 2021",
    endYear: "Current",
    website: "https://demando.io",
    lede: "Working as a Lead Frontend Developer on a web recruiting platform built using React.js and Typescript for the frontend, and Node.js, Typescript, GraphQL, and PostgresQL for the backend. Getting familiar with GCP (Google Cloud Platform.) and having the opportunity to influence a lot on design and architecture.",
  },
  {
    heading: "Dooer",
    startYear: "Aug 2019",
    endYear: "2021",
    website: "https://dooer.se",
    lede: "Lead frontend development architecture and decision making in an R&D team in fall of 2020. Some of the things I introduced include an organized design system and a new state management solution. This helped peers be more productive and less unsure about what technologies to use.",
  },
  {
    heading: "Wopify",
    startYear: "Jan 2018",
    endYear: "2019",
    lede: "Architected and constructed a fully functional web application in React.js from the design specification we initially developed. Collaborated closely with a senior backend engineer.",
  },
  {
    heading: "Expectrum",
    startYear: "Oct 2017",
    endYear: "May 2018",
    lede: "Worked part-time as an instructor at a local tech-center where I got to teach basic Python, Scratch, soldering, 3D printing, and much more.",
    website: "https://expectrum.se/",
  },
];

const projects = [
  {
    image:
      "https://res.cloudinary.com/albin-groen/image/upload/v1675554630/notary-ios-seo_ckjjmj.png",
    lede: "Straight forward iOS notes app that stores and encrypts your notes on-device.",
    href: "https://getnotary.app/ios",
    heading: "Notary for iOS",
  },
  {
    image:
      "https://res.cloudinary.com/albin-groen/image/upload/v1666376433/seo_wogf0x.png",
    lede: "A very fast, desktop-first & Vim-friendly markdown editor for your Mac.",
    href: "https://getnotary.app",
    heading: "Notary",
  },
  {
    image:
      "https://res.cloudinary.com/albin-groen/image/upload/w_1000/v1654800612/react-cmdk-og_yyd4kb.png",
    lede: "React package for adding a beautiful and accessible command palette to your app.",
    href: "https://react-cmdk.com/",
    heading: "react-cmdk",
  },
  {
    image:
      "https://res.cloudinary.com/albin-groen/image/upload/v1637839182/psb-seo_m65tjk.png",
    lede: "Build your Prisma schema visually in this easy-to-use web based schema builder.",
    href: "https://prismabuilder.io",
    heading: "Prisma Schema Builder",
  },
];

export default function Home() {
  const [isHoveringName, setIsHoveringName] = useState<boolean>(false);
  const [reposScroll, setReposScroll] = useState<number>(0);
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/albingroen/repos?sort=pushed")
      .then((res) => res.json())
      .then((res) => {
        setRepos(res);
      });
  }, []);

  const reposRef = useRef<HTMLUListElement>(null);

  const filteredRepos = repos ? repos.filter((repo) => !repo.archived) : [];

  const reposInnerWidth = useMemo(
    () =>
      (filteredRepos.length || 0) * (REPO_WIDTH + REPO_SPACING) - REPO_SPACING,
    [filteredRepos?.length]
  );

  const isHidingLeftScrollButton = !reposScroll;

  const isHidingRightScrollButton = useMemo(
    () =>
      reposInnerWidth ===
      reposScroll +
        (process.browser ? window.innerWidth - REPO_SPACING * 2 : 0),
    [reposScroll, reposInnerWidth]
  );

  return (
    <>
      <Seo />

      <div className="pb-32 sm:py-24 flex flex-col items-center">
        <header className="w-full max-w-screen-md px-8 flex flex-col items-start">
          <Image
            className="w-40 sm:w-48 aspect-square rounded object-center object-cover mt-20"
            src={PROFILE_PHOTO}
            height={300}
            width={300}
            alt=""
          />

          <h1
            className="text-6xl sm:text-7xl mt-12 sm:mt-[72px] font-light selection-light relative leading-tight"
            onMouseEnter={() => {
              setIsHoveringName(true);
            }}
            onMouseLeave={() => {
              setIsHoveringName(false);
            }}
          >
            <span>Hej, I&apos;m Albin</span>

            <span
              className={classNames(
                "hidden md:inline transition text-neutral-400 dark:text-neutral-500 absolute right-0 top-0 transform translate-x-full p-2 text-xl font-medium font-mono",
                isHoveringName
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              )}
            >
              [al-bin]
            </span>
          </h1>

          <div className="rounded-full py-3 px-5 sm:px-[23px] border border-black/20 dark:border-neutral-700 mt-10 sm:mt-12 inline-flex items-center justify-center">
            <p className="text-2xl sm:text-3xl font-light selection-light">
              Builder & Designer
            </p>
          </div>

          <p className="mt-10 sm:mt-[52px] text-2xl sm:text-3xl font-light leading-normal sm:leading-normal selection-light">
            Using code and design to craft beautiful & accessible digital
            solutions. I currently lead frontend development at Demando.
          </p>

          <Image
            className="aspect-vieo mt-16 rounded object-center object-cover transition filter grayscale"
            alt="Map of the great Stockholm region"
            src="/map.png"
            width={1920}
            height={1080}
          />
        </header>

        <section className="py-20 w-full flex justify-center text-black">
          <div className="flex w-full max-w-screen-md justify-center md:justify-start items-center flex-wrap">
            {links.map(({ label, href, icon, className }) => (
              <SocialLink
                key={href}
                icon={icon}
                className={className}
                label={label}
                href={href}
              />
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-tr from-neutral-50 via-neutral-50 to-neutral-100 dark:from-black/60 dark:via-black/60 dark:to-black/60 py-24 sm:py-28 w-full flex justify-center">
          <div className="w-full max-w-screen-md flex flex-col px-8">
            <h2 className="text-4xl sm:text-5xl font-light selection-light leading-tight">
              Design exploration
            </h2>

            <ul className="grid grid-cols-1 md:grid-cols-2 mt-14 gap-4 dark:gap-5">
              {sandboxes.map(({ href, title, icon: Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block border border-neutral-200/75 dark:border-neutral-900 p-4 rounded bg-white dark:bg-neutral-900 flex shadow-sm items-center gap-3.5 sm:hover:border-neutral-200 dark:sm:hover:border-neutral-800 sm:hover:bg-neutral-100 dark:sm:hover:bg-neutral-800 focus:outline-none focus-visible:border-neutral-200 focus-visible:bg-neutral-100 dark:focus-visible:border-neutral-800 dark:focus-visible:bg-neutral-800 transition group sm:hover:shadow-none"
                  >
                    <Icon
                      strokeWidth={0.75}
                      strokeLinecap="square"
                      className="w-8 sm:w-9 text-neutral-600 dark:text-neutral-500 sm:group-hover:text-inherit transition"
                    />

                    <h3 className="text-2xl sm:text-3xl font-light truncate">
                      {title}
                    </h3>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-20 sm:py-28 w-full flex flex-col items-center border-t border-neutral-100 dark:border-t-0 dark:bg-grid-dark">
          <div className="w-full max-w-screen-md px-8">
            <h2 className="text-4xl sm:text-5xl font-light selection-light leading-tight">
              Open source work
            </h2>
          </div>

          <div
            className="relative mt-14 w-full"
            style={{ paddingInline: REPO_SPACING }}
          >
            <div className="hidden sm:block">
              <button
                type="button"
                title="Scroll left"
                onDoubleClick={() => {
                  reposRef.current?.scroll({
                    left: 0,
                    behavior: "smooth",
                  });
                }}
                className={classNames(
                  "scroll-button left-6",
                  isHidingLeftScrollButton && "hidden"
                )}
                onClick={() => {
                  reposRef.current?.scroll({
                    left: reposRef.current.scrollLeft - REPO_WIDTH,
                    behavior: "smooth",
                  });
                }}
              >
                <ChevronLeftIcon strokeWidth={1} className="w-8" />
              </button>

              <button
                type="button"
                title="Scroll right"
                onDoubleClick={() => {
                  reposRef.current?.scroll({
                    left: reposInnerWidth,
                    behavior: "smooth",
                  });
                }}
                className={classNames(
                  "scroll-button right-6",
                  isHidingRightScrollButton && "hidden"
                )}
                onClick={() => {
                  reposRef.current?.scroll({
                    left: reposRef.current.scrollLeft + REPO_WIDTH,
                    behavior: "smooth",
                  });
                }}
              >
                <ChevronRightIcon strokeWidth={1} className="w-8" />
              </button>
            </div>

            <div
              className="hidden md:flex inset-0 absolute justify-between z-10 pointer-events-none"
              style={{ paddingInline: REPO_SPACING }}
            >
              {isHidingLeftScrollButton ? (
                <div />
              ) : (
                <div className="w-[20%] bg-gradient-to-l from-transparent via-transparent to-gray-100 dark:to-gray-900/80" />
              )}

              {isHidingRightScrollButton ? (
                <div />
              ) : (
                <div className="w-[20%] bg-gradient-to-r from-transparent via-transparent to-gray-100 dark:to-gray-900/80" />
              )}
            </div>

            <ul
              className="h-full flex overflow-x-auto w-full repos"
              style={{ gap: REPO_SPACING, scrollSnapType: "x mandatory" }}
              ref={reposRef}
              onScroll={(e) => {
                setReposScroll(e.currentTarget.scrollLeft);
              }}
            >
              {filteredRepos
                ? [...filteredRepos]
                    .sort((a, b) => b.stargazers_count - a.stargazers_count)
                    .filter((repo) => !repo.archived)
                    .map((repo) => {
                      return (
                        <li key={repo.id} className="snap-start">
                          <a
                            className={classNames(
                              "bg-gray-100 dark:bg-gray-800 dark:brightness-95 sm:hover:brightness-90 dark:sm:hover:brightness-75 focus:outline-none focus-visible:brightness-90 rounded h-full p-8 group transition flex items-end cursor-alias"
                            )}
                            style={{ width: REPO_WIDTH }}
                            rel="noopener noreferrer"
                            href={repo.html_url}
                            target="_blank"
                          >
                            <div className="flex flex-col h-40 sm:h-48 justify-start">
                              <div className="flex-1">
                                <h4 className="text-2xl sm:text-3xl line-clamp-1">
                                  {repo.name}
                                </h4>

                                {repo.description && (
                                  <p className="mt-3.5 text-gray-500 dark:text-gray-400 leading-relaxed sm:text-lg font-light">
                                    {repo.description}
                                  </p>
                                )}
                              </div>

                              <p className="mt-4 text-gray-400 dark:text-gray-500 line-clamp-1 font-mono">
                                {repo.language}
                              </p>
                            </div>
                          </a>
                        </li>
                      );
                    })
                : null}
            </ul>
          </div>
        </section>

        <section className="w-full pt-20 sm:pt-32 bg-[#84F79F] dark:bg-emerald-800 flex flex-col items-center justify-center">
          <div className="w-full max-w-screen-md px-8">
            <h2 className="text-4xl sm:text-5xl font-light leading-tight">
              Career timeline
            </h2>

            <ul className="mt-14 sm:mt-20">
              {workHistory.map((work, i) => {
                const Icon =
                  work.endYear === "Current" ? CheckIcon : ArrowUpIcon;

                const months =
                  i === workHistory.length - 1
                    ? undefined
                    : differenceInMonths(
                        new Date(work.startYear),
                        new Date(workHistory[i + 1]?.startYear)
                      );

                return (
                  <li key={work.heading} className="flex">
                    <div className="sm:w-24 flex flex-col items-start relative">
                      <p className="hidden sm:inline-block absolute font-medium text-[#84F79F] dark:text-emerald-800 brightness-75 dark:brightness-[60%] text-lg top-0 left-0 transform translate-y-2.5 -translate-x-[122%]">
                        {work.startYear}
                      </p>

                      <div className="flex flex-col items-center h-full">
                        <div className="rounded-full bg-white h-10 sm:h-12 w-10 sm:w-12 flex items-center justify-center border-2 sm:border-4 border-[#84F79F] dark:border-emerald-800">
                          <Icon className="h-5 sm:h-6 w-5 sm:w-6 text-[#84F79F] dark:text-emerald-800 brightness-75 dark:brightness-100" />
                        </div>

                        <div className="flex-1 border-l sm:border-l-2 border-white rounded-full" />
                      </div>
                    </div>

                    <div
                      className="flex-1 pt-1 pl-6 sm:pl-0"
                      style={{
                        paddingBottom: months
                          ? 50 + (months ? 2 * months : 0)
                          : 100,
                      }}
                    >
                      {work.website ? (
                        <a
                          target="_blank"
                          href={work.website}
                          rel="noopener noreferrer"
                          className="inline-block hover:underline underline-offset-4 decoration-2"
                        >
                          <h3 className="text-2xl sm:text-3xl">
                            {work.heading}
                          </h3>
                        </a>
                      ) : (
                        <h3 className="text-2xl sm:text-3xl">{work.heading}</h3>
                      )}

                      <p className="mt-4 sm:text-lg leading-relaxed sm:leading-relaxed dark:font-light">
                        {work.lede}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="bg-neutral-100 dark:bg-neutral-800 w-full flex items-center justify-center">
          <Image
            src="/office.JPG"
            alt=""
            className="object-cover object-center"
            placeholder="blur"
            blurDataURL="data:image/png;base64,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"
            width={1920}
            height={1080}
          />
        </section>

        <section className="w-full py-20 sm:py-32 flex flex-col items-center justify-center">
          <div className="w-full max-w-screen-md px-8">
            <h2 className="text-4xl sm:text-5xl font-light leading-tight">
              I also write{" "}
              <span className="opacity-40">every now and then</span>
            </h2>

            <Link
              href="/blog"
              className="text-2xl sm:text-3xl inline-flex items-center hover:underline underline-offset-4 decoration-2 font-light mt-10 gap-2.5"
            >
              <span>View posts here</span>
              <ArrowRightIcon className="w-6 sm:w-7" />
            </Link>
          </div>
        </section>

        <section className="w-full py-20 sm:py-32 flex flex-col items-center justify-center bg-gray-700 text-white">
          <div className="w-full max-w-screen-md px-8">
            <h2 className="text-4xl sm:text-5xl font-light">
              Personal projects
            </h2>
          </div>

          <ul className="w-full max-w-screen-xl px-8 mt-14 grid grid-cols-1 lg:grid-cols-2 gap-5">
            {projects.map((project) => (
              <li key={project.heading} className="h-full">
                <a
                  target="_blank"
                  href={project.href}
                  rel="noopener noreferrer"
                  className="flex flex-col sm:flex-row sm:items-center gap-6 p-3.5 bg-gray-600 rounded h-full sm:hover:bg-gray-500 transition group cursor-alias"
                >
                  <img
                    src={project.image}
                    className="w-full sm:w-1/3 h-full object-center object-cover rounded sm:grayscale sm:group-hover:grayscale-0 transition"
                    alt=""
                  />

                  <div className="flex-1">
                    <h3 className="text-xl smtext-2xl">{project.heading}</h3>

                    <p className="font-light mt-2 leading-relaxed text-gray-300 max-w-xs group-hover:text-gray-200 transition text-sm sm:text-base">
                      {project.lede}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="w-full bg-neutral-100 dark:bg-transparent h-96 hover:brightness-90 transition dark:border-b border-neutral-800">
          <Link href="/photos" title="Photos">
            <img
              src="https://res.cloudinary.com/albin-groen/image/upload/f_auto,q_auto/v1676243359/photos_z23wmi.png"
              className="h-full w-full object-top object-cover dark:hidden"
              loading="lazy"
              alt=""
            />

            <img
              src="https://res.cloudinary.com/albin-groen/image/upload/f_auto,q_auto/v1676243667/photos-dark_tw8hoz.png"
              className="h-full w-full object-top object-cover hidden dark:block"
              loading="lazy"
              alt=""
            />
          </Link>
        </section>

        {/* <section className="bg-gradient-to-tr from-neutral-50 via-neutral-50 to-neutral-100 dark:from-black/60 dark:via-black/60 dark:to-black/60 py-20 sm:py-28 w-full flex justify-center"> */}
        {/*   <div className="w-full max-w-screen-md flex flex-col items-center px-8"> */}
        {/*     <h2 className="text-4xl sm:text-5xl font-light selection-light text-center"> */}
        {/*       Work */}
        {/*     </h2> */}
        {/*   </div> */}
        {/* </section> */}

        <Footer />
      </div>
    </>
  );
}

interface SocialLinkProps {
  className: string;
  icon: ReactNode;
  label: string;
  href: string;
}

function SocialLink({ className, label, icon, href }: SocialLinkProps) {
  return (
    <a
      className={classNames(
        "transition block p-3 sm:p-4 sm:hover:opacity-50 focus:outline-none focus-visible:opacity-50",
        className
          ? className
          : "text-neutral-500 dark:text-neutral-400 sm:hover:text-inherit"
      )}
      rel="noopener noreferrer"
      target="_blank"
      title={label}
      href={href}
      key={href}
    >
      {icon}
    </a>
  );
}
