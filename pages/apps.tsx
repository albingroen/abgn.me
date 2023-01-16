/* eslint-disable @next/next/no-img-element */
import Footer from "../components/Footer";
import Link from "next/link";
import Seo from "../components/Seo";
import { ExternalLinkIcon } from "@heroicons/react/outline";

const APPS = [
  {
    label: "Arc",
    href: "https://arc.net/",
    description: "The best web browser I've ever used",
    icon: "/arc.png",
  },
  {
    label: "Raycast",
    href: "https://raycast.com",
    description: "This is what I use to navigate my Mac",
    icon: "/raycast.png",
  },
  {
    label: "Handmirror",
    href: "https://handmirror.app/",
    description: "Great for checking my hair before meetings",
    icon: "/handmirror.png",
  },
  {
    label: "CleanShot X",
    href: "https://cleanshot.com/",
    description: "Fantastic screenshot tool for the Mac",
    icon: "/cleanshot.png",
  },
  {
    label: "CleanMyMac X",
    href: "https://cleanmymac.com/",
    description: "The only cleaner software for Mac that I trust",
    icon: "/cleanmymac.png",
  },
  {
    label: "Superhuman",
    href: "https://superhuman.com",
    description: "Next level email client for keyboard first individuals",
    icon: "/superhuman.png",
  },
  {
    label: "Cron",
    href: "https://cron.com",
    description: "Just a great calendar app for the Mac and iPhone",
    icon: "/cron.jpg",
  },
  {
    label: "Amethyst",
    href: "https://ianyh.com/amethyst/",
    description: "I can't use my Mac without this window manager",
    icon: "/amethyst.png",
  },
  {
    label: "Kitty",
    href: "https://sw.kovidgoyal.net/kitty/",
    description: "The best and fastest terminal I've ever tried",
    icon: "/kitty.svg",
  },
  {
    label: "Around",
    href: "https://around.co",
    description: "Seamless video meetings for the Mac",
    icon: "/around.jpg",
  },
  {
    label: "Pitch",
    href: "https://pitch.com",
    description: "An actually decent presentation maker",
    icon: "/pitch.avif",
  },
  {
    label: "Sketch",
    href: "https://sketch.com",
    description: "Rock solid design tool for the Mac",
    icon: "/sketch.png",
  },
  {
    label: "Figma",
    href: "https://figma.com",
    description: "Great collaborative design tool for everyone",
    icon: "/figma.webp",
  },
  {
    label: "Spotify",
    href: "https://spotify.com",
    description: "I mean, what else right?",
    icon: "/spotify.png",
  },
];

export default function Apps() {
  return (
    <>
      <Seo
        title="My favourite apps"
        url="https://abgn.me/apps"
        canonicalUrl="https://abgn.me/apps"
        image="https://res.cloudinary.com/albin-groen/image/upload/v1673885894/apps-og_opvczm.png"
        description="I've used the Mac for quite some time now, and I have found a few apps that I really, really like. Some of these apps I use at work, some for personal tasks, and some are just necessities for whenever I use a Mac. I hope you'll find something new for yourself here!"
      />

      <div className="max-w-screen-md mx-auto py-24 px-8">
        <header>
          <Link passHref href="/">
            <a className="text-blue-500 hover:underline font-medium">
              &larr; Home
            </a>
          </Link>

          <h1 className="text-3xl font-semibold mt-5">
            My{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 px-2 py-0.5 rounded rounded-tl-lg rounded-br-xl">
              <i>favourite</i>
            </span>{" "}
            apps
          </h1>

          <p className="mt-6 leading-relaxed">
            I&apos;ve used the Mac for quite some time now, and I have found a
            few apps that I really, really like. Some of these apps I use at
            work, some for personal tasks, and some are just necessities for
            whenever I use a Mac. I hope you&apos;ll find something new for
            yourself here!
          </p>
        </header>

        <ul className="mt-8 flex flex-col">
          {APPS.map(({ description, href, icon, label }) => (
            <li key={href}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group py-1 block"
              >
                <div className="flex items-center gap-6 py-4 sm:py-5 sm:pr-8 rounded-lg sm:-mx-24 sm:group-hover:bg-slate-100 transition duration-100">
                  <div className="hidden sm:block h-2 w-2 rounded-full bg-slate-300 rounded-full opacity-0 group-hover:opacity-100 transition duration-100 ml-12 mr-3" />

                  <div className="flex items-center justify-between flex-1">
                    <div className="flex items-center gap-6">
                      <img
                        className="w-12 h-12 sm:h-16 sm:w-16 object-center object-contain rounded-lg sm:rounded-xl"
                        src={icon}
                        alt=""
                      />

                      <div>
                        <h5 className="text-lg sm:text-xl font-medium">
                          {label}
                        </h5>
                        <p className="text-sm sm:text-base mt-1 sm:mt-1.5 text-slate-500">
                          {description}
                        </p>
                      </div>
                    </div>

                    <ExternalLinkIcon className="hidden sm:block w-5 text-slate-500 opacity-0 group-hover:opacity-100 transition duration-100" />
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <Footer />
      </div>
    </>
  );
}
