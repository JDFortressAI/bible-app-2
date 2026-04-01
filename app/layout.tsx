import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'JD Fortress Bible',
  description: "Daily Bible readings from M\u2019Cheyne\u2019s plan \u2014 NKJV",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
