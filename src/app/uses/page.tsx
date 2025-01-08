import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="w-full max-w-screen-md mx-auto px-6 py-20 space-y-8 text-balance">
      <header className="space-y-12">
        <Link href="/" className="flex items-center gap-1.5">
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

          <p>Software and hardware I use on a regular basis.</p>
        </div>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Software</h2>

        <ul className="space-y-2 list-disc list-inside">
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
    </main>
  );
}
