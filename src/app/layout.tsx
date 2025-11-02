import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auxilium Carona - School Website",
  description: "Empowering young minds for a brighter future",
  // icon.ico in app directory is automatically detected by Next.js and served at /icon.ico
  // public/favicon.ico serves as browser fallback at /favicon.ico
  // Only specify additional icons here
  icons: {
    icon: '/favicon.ico', // Browser fallback
    apple: '/images/favicon/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  themeColor: '#1e40af',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
