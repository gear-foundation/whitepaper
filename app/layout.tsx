import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { IBM_Plex_Sans, Geist } from 'next/font/google';
import { RootProvider } from 'fumadocs-ui/provider/next';
import './globals.css';

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'Gear Whitepaper',
    template: '%s | Gear Whitepaper',
  },
  description: 'Vision of the next-generation decentralized programming',
  metadataBase: new URL('https://whitepaper.gear.foundation/'),
  openGraph: {
    images: ['/img/wp-preview.jpg'],
  },
  icons: {
    icon: '/img/favicon-32x32.png',
    shortcut: '/img/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={geist.variable}>
      <body className={ibmPlexSans.className}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
