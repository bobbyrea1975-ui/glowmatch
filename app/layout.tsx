import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic']
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600']
});

export const metadata: Metadata = {
  title: 'Glowmatch — Find the routine your skin actually needs',
  description:
    'A two-minute quiz matches you to the right skincare products. Go deeper with a full skin profile, product tracking, and renewal reminders.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
