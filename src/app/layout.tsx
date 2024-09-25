import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

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
      <body className={`min-h-screen flex flex-col dark`}>
        <Nav />

        <div className="flex flex-col gap-5">
          <div className="px-6 border-b bg-card">
            <Breadcrumb className="max-w-screen-lg mx-auto py-3">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/blogg">Blogg</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <main className="px-6 flex-1 py-10">
            <div className="max-w-screen-lg mx-auto">{children}</div>
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
