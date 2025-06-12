import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import Footer from "./components/footer";
import Nav from "./components/nav";
import { satoshi, brule } from "./fonts/fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://madewithmake.com"),
  title: {
    default: "Made With Make - Custom Automation Solutions",
    template: "%s | Made With Make",
  },
  description: "Transform your business with custom automation solutions built on Make.com. Streamline workflows, boost productivity, and scale your operations efficiently.",
  keywords: "Make.com automation, custom automation, workflow automation, business automation, no-code automation",
  authors: [{ name: "Made With Make" }],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Made With Make - Custom Automation Solutions",
    description: "Transform your business with custom automation solutions built on Make.com. Streamline workflows, boost productivity, and scale your operations efficiently.",
    images: "/hero.png",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Made With Make - Custom Automation Solutions",
    description: "Transform your business with custom automation solutions built on Make.com. Streamline workflows, boost productivity, and scale your operations efficiently.",
    images: "/hero.png",
    creator: "@madewithmake",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
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
        className={`${satoshi.variable} ${brule.variable} font-satoshi antialiased`}
      >
        <Nav />
        {children}
        <Footer />
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="sxh+1gvgkOtl6zNfmd+tmQ"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
