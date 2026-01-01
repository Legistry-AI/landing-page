import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Legistry AI - AI-Powered Legal Operations Platform",
  description: "Transform your legal operations with specialized AI agents for contracts, compliance, vendor management, analytics, and document intelligence. Draft contracts in 60 seconds.",
  keywords: "legal AI, contract management, compliance automation, legal operations, AI legal assistant",
  openGraph: {
    title: "Legistry AI - AI-Powered Legal Operations Platform",
    description: "Transform your legal operations with specialized AI agents for contracts, compliance, vendor management, analytics, and document intelligence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
