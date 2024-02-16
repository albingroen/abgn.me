import type { Metadata } from "next";
import "./globals.css";

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
        <main className="max-w-screen-lg mx-auto px-10 py-24">{children}</main>
      </body>
    </html>
  );
}
