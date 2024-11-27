import '~/styles/globals.css';

import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import AppFooter from '~/components/app-footer/app-footer';
import AppNav from '~/components/app-nav/app-nav';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio ☉ Artem Codes',
  description: 'Portfolio website for Artem Clement',
  icons: [{ rel: 'icon', url: '/favicon.svg', type: 'image/svg+xml' }]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body>
        <AppNav />
        <main>{children}</main>
        <AppFooter />
      </body>
    </html>
  );
}
