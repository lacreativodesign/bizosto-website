import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeScript from "@/components/ThemeScript";
import AnalyticsConsent from "@/components/AnalyticsConsent";
import StructuredData from "@/components/StructuredData";

const isPublicProduction = process.env.VERCEL_ENV === "production";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bizosto.com"),
  title: {
    default: "Bizosto — The Operating System for Service Businesses",
    template: "%s | Bizosto",
  },
  description:
    "Bizosto connects CRM, projects, finance, HR, and the client portal in one system built for agencies, creative teams, and service businesses. 14-day free trial.",
  keywords: [
    "service business software",
    "agency ERP",
    "project management CRM",
    "client portal",
    "business operating system",
    "AI workforce",
    "agency management software",
  ],
  authors: [{ name: "Bizosto", url: "https://www.bizosto.com" }],
  creator: "Bizosto",
  publisher: "LA CREATIVO GROUP, LLC",
  robots: {
    index: isPublicProduction,
    follow: isPublicProduction,
    googleBot: {
      index: isPublicProduction,
      follow: isPublicProduction,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    siteName: "Bizosto",
    locale: "en_US",
    url: "https://www.bizosto.com",
    title: "Bizosto — The Operating System for Service Businesses",
    description:
      "CRM, projects, finance, HR, and client portal — connected in one system. Built for service businesses. 14-day free trial.",
    images: [
      {
        url: "/og?title=The+Operating+System+for+Service+Businesses",
        width: 1200,
        height: 630,
        alt: "Bizosto — The Operating System for Service Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bizosto — The Operating System for Service Businesses",
    description:
      "CRM, projects, finance, HR, and client portal — connected in one system. Built for service businesses.",
    images: ["/og?title=The+Operating+System+for+Service+Businesses"],
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon-32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body>
        <ThemeScript />
        <div className="flex min-h-screen flex-col bg-background">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <AnalyticsConsent />
      </body>
    </html>
  );
}
