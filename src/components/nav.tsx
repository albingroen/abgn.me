"use client";

import classNames from "@/lib/classNames";
import { MountainIcon } from "lucide-react";
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
      href: "/kurs",
      label: "Kurs",
    },
    {
      href: "/kontakt",
      label: "Kontakt",
    },
  ];

  return (
    <nav className="bg-white sticky top-0 px-6 py-2.5 border-b border-gray-50 shadow-sm">
      <div className="max-w-screen-sm mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-xl flex items-center gap-2 font-semibold hover:text-gray-500 transition tracking-tight leading-none"
        >
          <MountainIcon
            size={20}
            className="fill-orange-500 stroke-orange-500"
          />
          <span>Albin Groen</span>
        </Link>

        <div className="flex items-center gap-1.5">
          {pages.map((page) => (
            <Link
              key={page.href}
              className={classNames(
                "rounded-md py-2 px-3 transition flex items-center gap-2",
                pathname === page.href
                  ? "text-black font-medium"
                  : "text-gray-500 hover:text-gray-800"
              )}
              href={page.href}
            >
              {page.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
