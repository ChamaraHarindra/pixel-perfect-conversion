import type { Metadata } from "next";
import { bodyFont, headerFont } from "../lib/utils/fonts";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";

export const metadata: Metadata = {
  title: "Pixel Perfect Conversion",
  description: "Figma to Next.js Conversion by Chamara Harindra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${headerFont.variable} ${bodyFont.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
