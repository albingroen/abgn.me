import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

interface ArticleLayoutProps {
  children: React.ReactNode;
  header: React.ReactNode;
}

export function ArticleLayout({ children, header }: ArticleLayoutProps) {
  return (
    <div className="text-white min-h-screen max-w-2xl mx-auto px-6 py-16">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-10"
      >
        <ArrowLeft className="size-4" />
        Back to home
      </Link>

      <article>
        <header className="mb-10 flex flex-col gap-6">{header}</header>

        <div className="prose prose-invert prose-stone prose-lg max-w-none prose-headings:font-medium!">
          {children}
        </div>
      </article>
    </div>
  );
}
