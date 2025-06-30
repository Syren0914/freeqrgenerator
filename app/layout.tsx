import "@/styles/globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Free QR Generator",
  description: "Generate QR codes instantly for free.",
  generator: "Next.js",
  metadataBase: new URL("https://freeqrgenerator.vercel.app"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Free QR Generator",
    description: "Generate high-quality QR codes for free — no login required.",
    url: "https://freeqrgenerator.vercel.app",
    siteName: "Free QR Generator",
    type: "website",
  },
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
