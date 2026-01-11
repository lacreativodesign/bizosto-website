import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeScript from "@/components/ThemeScript";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteName = process.env.NEXT_PUBLIC_APP_NAME ?? "Bizosto";

export const metadata: Metadata = {
  title: {
    default: `${siteName} | Business OS for Service Teams`,
    template: `%s | ${siteName}`,
  },
  description:
    "Bizosto is a business OS that turns chaos into process, automation, and accountability for service providers.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://bizosto.example.com"),
  openGraph: {
    title: `${siteName} | Business OS for Service Teams`,
    description:
      "Standardize delivery, finance, and reporting with a unified ERP built for agencies and consultancies.",
    type: "website",
    images: [
      {
        url: "/og-placeholder.svg",
        width: 1200,
        height: 630,
        alt: "Bizosto ERP",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeScript />
        <div className="flex min-h-screen flex-col bg-background">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
