import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "BLAST.OS",
  description: "BLAST.OS Leaderbord",
};

const Symtext = localFont({
  src: "../assets/fonts/Symtext.ttf",
  variable: "--font-symtext",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${Symtext.variable} bg-black`}>{children}</body>
    </html>
  );
}
