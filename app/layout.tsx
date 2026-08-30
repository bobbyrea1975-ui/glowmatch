import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Glowmatch — Find the routine your skin actually needs',
  description:
    'A two-minute quiz matches you to the right skincare products. Go deeper with a full skin profile, product tracking, and renewal reminders.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
