import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DM_Sans, Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeScript from "@/components/ThemeScript";
import Script from "next/script";
import StructuredData from "@/components/StructuredData";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bizosto.com"),
  title: {
    default: "Bizosto — The Operating System for Service Businesses",
    template: "%s | Bizosto",
  },
  description:
    "Bizosto connects CRM, projects, finance, HR, and client portal into one system built for service businesses with 10–200 people. 14-day free trial.",
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
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
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
    site: "@bizosto",
    creator: "@bizosto",
    title: "Bizosto — The Operating System for Service Businesses",
    description:
      "CRM, projects, finance, HR, and client portal — connected in one system. Built for service businesses.",
    images: ["/og?title=The+Operating+System+for+Service+Businesses"],
  },
  alternates: {
    canonical: "https://www.bizosto.com",
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
    <html
      lang="en"
      className={`${dmSans.variable} ${sora.variable}`}
      suppressHydrationWarning
    >
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MFXFFQ96');`,
          }}
        />
        <StructuredData />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MFXFFQ96"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
