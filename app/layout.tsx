import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://shreehansdeep.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shree Hans Deep Wood Works & Saw Mills | Premium Wood & Industrial Solutions",
    template: "%s | Shree Hans Deep Wood Works",
  },
  description: "Premium wood furniture, industrial packing materials, custom woodwork, and metal works. Serving homes, offices, and factories across Haryana. Quality craftsmanship since years.",
  keywords: [
    "wood furniture",
    "office furniture",
    "industrial packing",
    "custom woodwork",
    "metal works",
    "saw mills",
    "Haryana furniture",
    "wooden pallets",
    "furniture manufacturer",
    "industrial solutions",
    "B2B furniture",
    "custom furniture",
  ],
  authors: [{ name: "Shree Hans Deep Wood Works & Saw Mills" }],
  creator: "Shree Hans Deep Wood Works & Saw Mills",
  publisher: "Shree Hans Deep Wood Works & Saw Mills",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Shree Hans Deep Wood Works & Saw Mills",
    title: "Shree Hans Deep Wood Works & Saw Mills | Premium Wood & Industrial Solutions",
    description: "Premium Wood & Industrial Solutions for Homes, Offices & Factories. Quality craftsmanship in Haryana.",
    images: [
      {
        url: `${siteUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Shree Hans Deep Wood Works & Saw Mills",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shree Hans Deep Wood Works & Saw Mills",
    description: "Premium Wood & Industrial Solutions for Homes, Offices & Factories",
    images: [`${siteUrl}/images/og-image.jpg`],
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}#organization`,
    name: "Shree Hans Deep Wood Works & Saw Mills",
    description: "Premium wood furniture, industrial packing materials, custom woodwork, and metal works manufacturer in Haryana",
    url: siteUrl,
    telephone: "+919466022823",
    email: "shreehansdeep94@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Near NH-48, Rewari Road, Kasola Chowk",
      addressLocality: "Haryana",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.134958",
      longitude: "76.644783",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "$$",
    areaServed: {
      "@type": "State",
      name: "Haryana",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Wood & Industrial Products",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Home Furniture",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Office Furniture",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Industrial Packing Materials",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Custom Woodwork",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Metal Works",
          },
        },
      ],
    },
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

