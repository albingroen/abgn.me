import type { Metadata } from "next";
import "./globals.css";
import { format } from "date-fns";

export const metadata: Metadata = {
  title: "Albin Groen",
  description: "Albin Groen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="max-w-screen-lg mx-auto px-10 py-32">
          {children}

          <footer className="mt-20">
            <p className="text-center">
              © Albin Groen {format(new Date(), "yyyy")}
            </p>
          </footer>
        </main>
      </body>
    </html>
  );
}
