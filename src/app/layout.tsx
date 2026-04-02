import type { Metadata } from "next";
import {
  Figtree,
  Geist,
  Geist_Mono,
  Shrikhand,
  Source_Serif_4,
} from "next/font/google";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import Header from "@/components/layout/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const shrikhand = Shrikhand({
  variable: "--font-shrikhand",
  subsets: ["latin"],
  weight: "400",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata: Metadata = {
  title: "Bakehouse - Sweet Delights",
  description: "Handcrafted treats for every occasion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${shrikhand.variable} ${figtree.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ViewTransitions>
          <Header />
          {children}
        </ViewTransitions>
      </body>
    </html>
  );
}
