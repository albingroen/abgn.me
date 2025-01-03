import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className="prose prose-headings:font-bold prose-headings:tracking-tight prose-invert w-full max-w-screen-md mx-auto px-6 py-20 space-y-20 text-balance prose-a:link">
      <Link href="/" className="flex items-center gap-2">
        <ArrowLeftIcon className="w-5" />
        <span>Back</span>
      </Link>

      {children}
    </div>
  );
}
