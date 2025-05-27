import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/footer";
import Nav from "./components/nav";
import { satoshi, brule } from "./fonts/fonts";

export const metadata: Metadata = {
  title: "Made With Make - Custom Automation Solutions",
  description: "Transform your business with custom automation solutions built on Make.com. Streamline workflows, boost productivity, and scale your operations efficiently.",
  keywords: "Make.com automation, custom automation, workflow automation, business automation, no-code automation",
  authors: [{ name: "Made With Make" }],
  openGraph: {
    title: "Made With Make - Custom Automation Solutions",
    description: "Transform your business with custom automation solutions built on Make.com. Streamline workflows, boost productivity, and scale your operations efficiently.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Made With Make - Custom Automation Solutions",
    description: "Transform your business with custom automation solutions built on Make.com. Streamline workflows, boost productivity, and scale your operations efficiently.",
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
      </body>
    </html>
  );
}
