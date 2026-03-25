import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeScript from "@/components/ThemeScript";

export const metadata: Metadata = {
  title: {
    default: "Bizosto — Run Your Entire Service Business in One System",
    template: "Bizosto — %s",
  },
  description:
    "Bizosto is the all-in-one business platform for service teams. CRM, sales, projects, finance, HR, and client portal — connected, automated, and built to grow with you.",
  metadataBase: new URL("https://www.bizosto.com"),
  openGraph: {
    siteName: "Bizosto",
    url: "https://www.bizosto.com",
    type: "website",
    images: [
      {
        url: "/og-placeholder.svg",
        width: 1200,
        height: 630,
        alt: "Bizosto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
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
