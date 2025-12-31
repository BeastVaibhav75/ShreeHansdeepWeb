import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Shree Hans Deep Wood Works & Saw Mills | Premium Wood & Industrial Solutions",
  description: "Premium wood furniture, industrial packing materials, custom woodwork, and metal works. Serving homes, offices, and factories across Haryana.",
  keywords: "wood furniture, office furniture, industrial packing, custom woodwork, metal works, saw mills, Haryana",
  authors: [{ name: "Shree Hans Deep Wood Works & Saw Mills" }],
  openGraph: {
    title: "Shree Hans Deep Wood Works & Saw Mills",
    description: "Premium Wood & Industrial Solutions for Homes, Offices & Factories",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

