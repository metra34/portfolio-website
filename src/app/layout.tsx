import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio ☉ Artem Codes",
  description: "Portfolio website for Artem Clement",
  icons: [{ rel: "icon", url: "/favicon.svg", type: "image/svg+xml" }],
};

const TopNav = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-4">
      <div>LOGO</div>
      <div className="inline-flex items-center gap-4 text-xl font-semibold">
        <Link href="/">Experience</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div>LINK ICONS</div>
    </nav>
  );
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
