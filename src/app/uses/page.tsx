import { ArrowLeftIcon } from "lucide-react";
import { formatDistance } from "date-fns";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="w-full max-w-screen-md mx-auto px-6 py-20 space-y-20 text-balance">
      <div className="space-y-10">
        <header className="space-y-12">
          <Link href="/" className="flex items-center gap-1.5 link">
            <ArrowLeftIcon className="w-5" />
            <span>Back</span>
          </Link>

          <Image
            alt=""
            src="/setup.jpeg"
            width={543}
            height={362}
            className="rounded"
          />

          <div className="space-y-6">
            <h1 className="font-bold tracking-tight text-4xl">Uses</h1>

            <div className="flex items-center gap-3">
              <Image
                alt=""
                width={48}
                height={48}
                src="/dither.png"
                className="w-12 h-12 rounded-full m-0"
              />
              <div>
                <p className="m-0 font-medium">Albin Groen</p>
                <p className="m-0 text-sm text-gray-500">
                  Updated January 8, 2025
                </p>
              </div>
            </div>

            <p>
              I&apos;ve spent{" "}
              {formatDistance(new Date().getTime(), new Date("2017").getTime())}{" "}
              years tweaking and refining my setup to be as productive and
              enjoyable as possible. Here's a list of the software I use on a
              daily basis.
            </p>
          </div>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Software</h2>

          <ul className="space-y-2 list-disc list-inside">
            <li>
              <a className="link" href="https://zed.dev">
                Zed
              </a>
            </li>

            <li>
              <a className="link" href="https://neovim.io">
                Neovim
              </a>

              <ul className="list-disc list-inside pl-6 mt-1">
                <li>
                  <a
                    className="link"
                    href="https://github.com/albingroen/dotfiles/tree/main/nvim"
                  >
                    Configuration
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a className="link" href="https://sw.kovidgoyal.net/kitty">
                Kitty
              </a>

              <ul className="list-disc list-inside pl-6 mt-1">
                <li>
                  <a
                    className="link"
                    href="https://github.com/albingroen/dotfiles/tree/main/kitty"
                  >
                    Configuration
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a className="link" href="https://fishshell.com">
                Fish
              </a>

              <ul className="list-disc list-inside pl-6 mt-1">
                <li>
                  <a
                    className="link"
                    href="https://github.com/albingroen/dotfiles/tree/main/fish"
                  >
                    Configuration
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a className="link" href="https://obsidian.md">
                Obsidian
              </a>
            </li>

            <li>
              <a className="link" href="https://arc.net">
                Arc
              </a>
            </li>

            <li>
              <a className="link" href="https://raycast.com">
                Raycast
              </a>
            </li>

            <li>
              <a className="link" href="https://eggerapps.at/postico2/">
                Postico
              </a>
            </li>

            <li>
              <a className="link" href="https://poedit.net/">
                Poedit
              </a>
            </li>

            <li>
              <a className="link" href="https://spotify.com">
                Spotify
              </a>
            </li>

            <li>
              <a className="link" href="https://1password.com">
                1Password
              </a>
            </li>

            <li>
              <a className="link" href="https://www.whatsapp.com/download">
                Whatsapp for Mac
              </a>
            </li>
          </ul>
        </section>
      </div>

      <footer>
        Copyright © {new Date().getFullYear()} Albin Groen. All rights
        reserved.
      </footer>
    </main>
  );
}
