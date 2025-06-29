import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import type React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        {/* AdSense Script - loads only on client side after hydration */}
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5002064208204178"
          crossOrigin="anonymous"
        />
        {children}
      </body>
    </html>
  );
}
