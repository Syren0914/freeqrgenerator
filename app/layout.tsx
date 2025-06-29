import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import type React from "react";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Free QR Generator",
  description: "Generate QR codes instantly for free.",
  generator: "v0.dev",
  other: {
    "google-adsense-account": "ca-pub-5002064208204178",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <head />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
