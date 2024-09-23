import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Albin Groen",
  description:
    "Jag är en självlärd utvecklare med många års erfarenhet av både app- och webbutveckling. Jag har arbetat med allt från mindre företag som Dooer till större organisationer som TV4. På fritiden driver jag flera sidoprojekt och är aktiv inom open source-communityn, där jag har skapat paket som används av tiotusentals utvecklare världen över.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Nav />

        <main className="px-6 py-14 flex-1">
          <div className="max-w-screen-sm max-w-screen-none prose-sm sm:prose prose-neutral prose-a:underline-offset-2 prose-a:decoration-1 prose-a:text-blue-600 mx-auto text-balance prose-headings:font-sans prose-headings:font-semobold prose-h1:font-medium prose-h2:font-medium prose-headings:tracking-tight">
            {children}
          </div>
        </main>

        <Footer />
      </body>
    </html>
  );
}
