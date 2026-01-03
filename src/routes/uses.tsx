import { createFileRoute } from "@tanstack/react-router";
import { ArticleLayout } from "@/components/article-layout";

export const Route = createFileRoute("/uses")({
  component: UsesPage,

  head: () => {
    const siteUrl = "https://abgn.me";
    const pageUrl = `${siteUrl}/uses`;
    const title = "Uses | abgn.me";
    const description =
      "Software and tools I use on a daily basis for web and app development.";

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: pageUrl },
        { property: "og:image", content: `${siteUrl}/setup.jpg` },
        { property: "og:site_name", content: "abgn.me" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: `${siteUrl}/setup.jpg` },
      ],
      links: [{ rel: "canonical", href: pageUrl }],
    };
  },
});

function UsesPage() {
  return (
    <ArticleLayout
      header={
        <>
          <img
            src="/setup.jpg"
            alt="My setup"
            className="w-full aspect-video object-cover"
          />

          <h1 className="text-4xl text-balance leading-tight">Uses</h1>
          <p className="text-xl text-gray-400 text-balance leading-normal">
            I've spent about 9 years tweaking and refining my setup to be as
            productive and enjoyable as possible. Here's a list of the software
            I use on a daily basis.
          </p>
          <time className="text-gray-500">Updated January 3, 2026</time>
        </>
      }
    >
      <h2>Software</h2>

      <ul>
        <li>
          <a href="https://neovim.io" target="_blank">
            Neovim
          </a>
          <ul>
            <li>
              <a
                href="https://github.com/albingroen/quick.nvim"
                target="_blank"
              >
                Configuration
              </a>
            </li>
          </ul>
        </li>

        <li>
          <a href="https://cursor.com" target="_blank">
            Cursor
          </a>
        </li>

        <li>
          <a href="https://claude.ai/code" target="_blank">
            Claude Code
          </a>
        </li>

        <li>
          <a href="https://ghostty.org" target="_blank">
            Ghostty
          </a>
          <ul>
            <li>
              <a
                href="https://github.com/albingroen/dotfiles/blob/main/ghostty/config"
                target="_blank"
              >
                Configuration
              </a>
            </li>
          </ul>
        </li>

        <li>
          <a href="https://fishshell.com" target="_blank">
            Fish
          </a>
          <ul>
            <li>
              <a
                href="https://github.com/albingroen/dotfiles/tree/main/fish"
                target="_blank"
              >
                Configuration
              </a>
            </li>
          </ul>
        </li>

        <li>
          <a href="https://obsidian.md" target="_blank">
            Obsidian
          </a>
        </li>

        <li>
          <a href="https://zen-browser.app" target="_blank">
            Zen
          </a>
        </li>

        <li>
          <a href="https://raycast.com" target="_blank">
            Raycast
          </a>
        </li>

        <li>
          <a href="https://eggerapps.at/postico2/" target="_blank">
            Postico
          </a>
        </li>

        <li>
          <a href="https://music.youtube.com" target="_blank">
            YouTube Music
          </a>
        </li>

        <li>
          <a href="https://proton.me/pass" target="_blank">
            Proton Pass
          </a>
        </li>
      </ul>

      <h2>Hardware</h2>

      <h3>Desk</h3>
      <ul>
        <li>
          <a
            href="https://www.apple.com/shop/buy-mac/macbook-pro"
            target="_blank"
          >
            MacBook Pro M3 Pro
          </a>
        </li>
        <li>
          <a href="https://ultimatehackingkeyboard.com" target="_blank">
            Ultimate Hacking Keyboard v2
          </a>
        </li>
        <li>
          <a
            href="https://www.logitech.com/sv-se/shop/p/mx-ergo-s-wireless-trackball-mouse"
            target="_blank"
          >
            Logitech MX Ergo
          </a>
        </li>
        <li>
          <a
            href="https://www.lg.com/us/monitors/lg-32un880-b-ultrafine-ergo-monitor"
            target="_blank"
          >
            LG Ultrafine Ergo
          </a>
        </li>
        <li>
          <a href="https://www.caldigit.com/ts4" target="_blank">
            Caldigit TS4
          </a>
        </li>
      </ul>

      <h3>Mobile</h3>
      <ul>
        <li>
          <a href="https://www.apple.com/iphone-16-pro" target="_blank">
            iPhone 16 Pro Max
          </a>
        </li>
        <li>
          <a
            href="https://fujifilm-x.com/products/cameras/x100v"
            target="_blank"
          >
            Fujifilm X100V
          </a>
        </li>
      </ul>

      <h3>Audio</h3>
      <ul>
        <li>
          <a href="https://www.apple.com/airpods-pro" target="_blank">
            AirPods Pro 3
          </a>
        </li>
        <li>
          <a
            href="https://www.shure.com/en-US/products/earphones/se215"
            target="_blank"
          >
            Shure SE215
          </a>
        </li>
        <li>
          <a
            href="https://www.bose.com/p/headphones/bose-quietcomfort-headphones/QCSE-HEADPHONEARN.html"
            target="_blank"
          >
            Bose QC SE
          </a>
        </li>
      </ul>
    </ArticleLayout>
  );
}
