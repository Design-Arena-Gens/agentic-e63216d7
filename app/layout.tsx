import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viral Video Generator - Faceless YouTube Channel",
  description: "Generate viral video ideas and scripts for your faceless YouTube channel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gradient-to-br from-purple-900 via-black to-blue-900 min-h-screen">
        {children}
      </body>
    </html>
  );
}
