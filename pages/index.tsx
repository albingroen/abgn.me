/* eslint-disable @next/next/no-img-element */
import { ExternalLinkIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
import Seo from "../components/Seo";

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
  return (
    <>
      <Seo />

      <main className="max-w-screen-md mx-auto py-24 px-8">
        <header>
          <img
            src="https://res.cloudinary.com/albin-groen/image/upload/v1657579233/ozfgz2mui85adytaafph.png"
            className="w-20 h-20 rounded-full object-center object-cover"
            alt=""
          />

          <h1 className="text-2xl font-semibold mt-8">Albin Groen</h1>

          <p className="mt-2 text-indigo-500 font-semibold">
            Builder and Designer
          </p>

          <p className="mt-5 leading-relaxed">
            I love building things from the ground up. There&apos;s just
            something so calming and fulfilling in combining creativity with
            building. I&apos;m currently leading frontend development at{" "}
            <a
              className="inline-flex items-center gap-1 underline text-slate-600"
              href="https://demando.io"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="font-medium">Demando</span>
              <ExternalLinkIcon className="w-4 text-slate-600" />
            </a>
            , where we&apos;re building a new way to navigate your way through
            your career.
          </p>

          <img
            className="mt-10 rounded-lg object-center object-cover w-1/2 hover:transform hover:scale-110 hover:rotate-2 hover:shadow-2xl hover:shadow-slate-200 transition"
            alt="Map of the great Stockholm region"
            src="/map.png"
          />
        </header>

        <section className="mt-16">
          <h2 className="text-lg font-semibold">Links</h2>

          <div className="flex mt-4 items-center gap-5 flex-wrap">
            {links.map((link) => (
              <a
                className="underline font-medium text-slate-600"
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
          <h2 className="text-lg font-semibold">Work</h2>

          <ul className="flex flex-col mt-5 gap-2">
            {workHistory.map((workItem, i) => (
              <Fragment key={workItem.heading}>
                {i ? (
                  <div className="h-8 w-px border-r-2 border-slate-300 border-dashed ml-11 -mt-6"></div>
                ) : null}

                <li className="flex items-start gap-2">
                  <p className="text-slate-500 w-32 font-medium tracking-tight">
                    {workItem.startYear} - {workItem.endYear}
                  </p>

                  <div className="flex flex-col gap-1">
                    <a
                      className={`font-medium text-slate-600 ${
                        workItem.website ? "underline" : ""
                      }`}
                      rel="noopener noreferrer"
                      href={workItem.website}
                      target="_blank"
                    >
                      {workItem.heading}
                    </a>

                    <p className="text-sm text-slate-500">{workItem.lede}</p>
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
              <li
                key={project.image}
                className="flex flex-col gap-4 items-start"
              >
                <img
                  className="w-full rounded-md object-center object-cover h-[200px]"
                  src={project.image}
                  alt=""
                />

                <div className="flex flex-col gap-2">
                  <a
                    className="underline font-medium"
                    rel="noopener noreferrer"
                    href={project.href}
                    target="_blank"
                  >
                    {project.heading}
                  </a>

                  <p className="slate-500">{project.lede}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <footer className="flex items-center justify-between mt-16">
          <p className="text-slate-500">© 2022 Albin Groen</p>
        </footer>
      </main>
    </>
  );
}
