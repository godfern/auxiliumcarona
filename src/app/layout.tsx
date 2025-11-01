import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auxilium Carona - School Website",
  description: "Empowering young minds for a brighter future",
  icons: {
    icon: [
      { url: '/images/favicon/favicon.ico' },
      { url: '/images/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/images/favicon/apple-touch-icon.png',
  },
  manifest: '/images/favicon/site.webmanifest',
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
