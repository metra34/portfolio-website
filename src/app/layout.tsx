import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Link from "next/link";
import AppFooter from "~/components/app-footer/app-footer";
import AppNav from "~/components/app-nav/app-nav";

export const metadata: Metadata = {
  title: "Portfolio ☉ Artem Codes",
  description: "Portfolio website for Artem Clement",
  icons: [{ rel: "icon", url: "/favicon.svg", type: "image/svg+xml" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <AppNav />
        <main>{children}</main>
        <AppFooter />
      </body>
    </html>
  );
}
