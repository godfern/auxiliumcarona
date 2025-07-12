import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auxilium Carona - School Website",
  description: "Empowering young minds for a brighter future",
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
