import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "@next/font/google";
import { Toaster } from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "../lib/classNames";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Gallery",
    href: "/photos",
  },
];

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <>
      <main id="container" className={`${inter.variable} font-sans`}>
        <nav className="max-w-screen-md p-8 mx-auto flex gap-8">
          {LINKS.map((LINK) => {
            const isActive = LINK.href === pathname;

            return (
              <Link
                key={LINK.href}
                href={LINK.href}
                className={classNames(isActive ? "opacity-100" : "opacity-50")}
              >
                {LINK.label}
              </Link>
            );
          })}
        </nav>

        <Component {...pageProps} />

        <Analytics />

        <Toaster
          toastOptions={{
            position: "bottom-right",
            style: {
              background: "#006aff",
              letterSpacing: 0.5,
              paddingInline: 2,
              paddingBlock: 6,
              borderRadius: 6,
              fontWeight: 500,
              color: "white",
              fontSize: 14,
            },
          }}
        />
      </main>
    </>
  );
}

export default MyApp;
