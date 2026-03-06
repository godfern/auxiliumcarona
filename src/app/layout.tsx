import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-JERHLL9TP8";

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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
            window.gtag = gtag;
          `}
        </Script>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
