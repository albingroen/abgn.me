import { EditIcon, GitBranchPlusIcon } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/albingroen",
      image: "/github.png",
    },
    {
      label: "Dribbble",
      href: "https://dribbble.com/albingroen",
      image: "/dribbble.png",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/albin-groen-689bbb305/",
      image: "/linkedin.png",
    },
    {
      label: "Mastodon",
      href: "https://mastodon.social/@abgn",
      image: "/mastodon.png",
    },
  ];

  return (
    <footer className="px-6 pb-12">
      <div className="max-w-screen-sm mx-auto flex flex-col gap-10">
        <hr />

        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.href}
              href={social.href}
              className="group"
              target="_blank"
            >
              <Image
                width={128}
                height={128}
                alt={social.label}
                src={social.image}
                className="w-6 opacity-30 group-hover:opacity-100 transition"
              />
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
          <div className="flex items-center gap-2.5 text-gray-400">
            <EditIcon size={16} />
            <p className="text-sm sm:text-base">Uppdaterad 2024-09-16</p>
          </div>

          <span className="text-gray-400">·</span>

          <a
            target="_blank"
            href="https://github.com/albingroen/abgn.me"
            className="flex items-center gap-2 text-gray-500 hover:text-inherit transition"
          >
            <GitBranchPlusIcon size={16} />
            <p className="text-sm sm:text-base">Föreslå en ändring</p>
          </a>
        </div>
      </div>
    </footer>
  );
}
