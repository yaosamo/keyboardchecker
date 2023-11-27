import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

export const metadata = {
  title: "Keyboard Checker - Test Your Keyboard Layout Online",
  description:
    "Efficiently test your keyboard layout - be it Split or Regular - with our comprehensive online tool. Perfect for checking key functionality and layout compatibility.",
  applicationName: "Keyboard Checker",
  keywords: [
    "online keyboard test",
    "split keyboard",
    "keyboard layout",
    "regular keyboard",
    "keyboard functionality",
    "keyboard checker",
  ],
  authors: [{ name: "Yaric Sam", url: "https://patreon.com/yaosamo" }],
  creator: "Yaric Sam",
  twitter: {
    card: "summary_large_image",
    title: "Keyboard Checker - Test Your Keyboard Layout Online",
    description:
      "Efficiently test your keyboard layout - be it Split or Regular - with our comprehensive online tool. Perfect for checking key functionality and layout compatibility.",
    creator: "@yaosamo",
    images: ["https://nextjs.org/og.png"],
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
  },
  openGraph: {
    title: "Keyboard Checker - Test Your Keyboard Layout Online",
    description:
      "Efficiently test your keyboard layout - be it Split or Regular - with our comprehensive online tool. Perfect for checking key functionality and layout compatibility.",
    url: "https://keyboard-checker.com",
    siteName: "Keyboard Checker",
    images: [
      {
        url: "https://keyboard-checker.com/og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Keyboard Checker - Test Your Keyboard Layout Online</title>
        <meta
          name="title"
          content="Keyboard Checker - Test Your Keyboard Layout Online"
        />
        <meta
          name="description"
          content="Efficiently test your keyboard layout - be it Split or Regular - with our comprehensive online tool. Perfect for checking key functionality and layout compatibility."
        />
      </Head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
