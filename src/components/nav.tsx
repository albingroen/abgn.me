"use client";

import classNames from "@/lib/classNames";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  GlobeIcon,
  LayoutPanelLeft,
  MountainIcon,
  RssIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const pages = [
    {
      href: "/blogg",
      label: "Blogg",
    },
    {
      href: "/nu",
      label: "Nu",
    },
    {
      href: "/kontakt",
      label: "Kontakt",
    },
  ];

  return (
    <nav className="bg-card z-10 text-white sticky top-0 px-6 py-2.5 border-b border-b-background shadow-sm">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-xl flex items-center gap-2 font-semibold hover:text-gray-500 transition tracking-tight leading-none"
        >
          <MountainIcon
            size={20}
            className="fill-orange-500 stroke-orange-500"
          />
          <span className="hidden sm:inline">Albin Groen</span>
          <span className="sm:hidden">AWG</span>
        </Link>

        <div className="flex items-center gap-1.5">
          {pages.map((page) => (
            <Link
              key={page.href}
              className={classNames(
                "rounded-md py-2 px-3 transition flex items-center gap-2",
                pathname === page.href
                  ? "text-white font-medium"
                  : "text-muted-foreground hover:text-foreground",
              )}
              href={page.href}
            >
              {page.label}
            </Link>
          ))}

          <div className="flex items-center gap-0">
            <DropdownMenu>
              <DropdownMenuTrigger className="px-3">
                <GlobeIcon size={18} strokeWidth={1} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Svenska</DropdownMenuItem>
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>日本語</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/sitemap.xml" className="px-3">
              <LayoutPanelLeft size={18} strokeWidth={1} />
            </Link>

            <Link href="/rss" className="pl-3">
              <RssIcon size={18} strokeWidth={1} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
