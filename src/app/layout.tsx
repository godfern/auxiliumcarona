import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://auxiliumcarona.org';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Auxilium Carona - School Website",
  description: "Empowering young minds for a brighter future",
  // Favicon and apple touch icon are served from app/favicon.ico and app/apple-icon.png (file-based metadata)
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
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
