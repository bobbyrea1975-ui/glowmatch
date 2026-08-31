
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Glowmatch — Find the routine your skin actually needs',
  description:
    'A two-minute quiz matches you to the right skincare products. Go deeper with a full skin profile, product tracking, and renewal reminders.',
  other: {
    'impact-site-verification': 'bdb21910-151f-45fe-b906-3563bb28adcd',
  },
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
