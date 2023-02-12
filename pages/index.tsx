/* eslint-disable @next/next/no-img-element */
import Footer from "../components/Footer";
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
import { PROFILE_PHOTO } from "../lib/constants";
import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpIcon, CheckIcon } from "@heroicons/react/20/solid";
import { differenceInMonths } from "date-fns";
import Image from "next/image";

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
