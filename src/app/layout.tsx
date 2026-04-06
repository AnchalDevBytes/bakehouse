import type { Metadata } from "next";
import {
  Dancing_Script,
  Figtree,
  Great_Vibes,
  Shrikhand,
  Source_Serif_4,
} from "next/font/google";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["600"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: "400",
});

const shrikhand = Shrikhand({
  variable: "--font-shrikhand",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Bakehouse | Artisan Bakery & Sweet Delights",
  description:
    "Experience the magic of handcrafted artisan breads, heavenly cakes, and delightful pastries made fresh every day with premium ingredients.",
  keywords: [
    "bakery",
    "artisan bread",
    "cakes",
    "pastries",
    "desserts",
    "sweet delights",
    "freshly baked",
  ],
  openGraph: {
    title: "Bakehouse | Artisan Bakery & Sweet Delights",
    description: "Handcrafted treats for every occasion, baked with love.",
    type: "website",
    url: "https://bakehouse.com",
    siteName: "Bakehouse",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bakehouse | Artisan Bakery & Sweet Delights",
    description: "Handcrafted treats for every occasion, baked with love.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${sourceSerif.variable} ${shrikhand.variable} ${greatVibes.variable} ${dancingScript.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">
        <ViewTransitions>
          <Header />
          {children}
          <Footer />
        </ViewTransitions>
      </body>
    </html>
  );
}
