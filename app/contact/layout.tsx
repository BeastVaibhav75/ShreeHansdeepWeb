import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://shreehansdeep.com";

export const metadata: Metadata = {
  title: "Contact Us | Shree Hans Deep Wood Works & Saw Mills",
  description: "Get in touch with us for inquiries, quotes, and consultations. Located near NH-48, Rewari Road, Kasola Chowk, Haryana. Call +91 94660 22823 or email shreehansdeep94@gmail.com",
  keywords: [
    "contact wood works",
    "furniture inquiry",
    "wood works Haryana contact",
    "furniture quote",
    "custom furniture consultation",
  ],
  openGraph: {
    title: "Contact Us | Shree Hans Deep Wood Works",
    description: "Get in touch for inquiries, quotes, and consultations. Located in Haryana",
    url: `${siteUrl}/contact`,
  },
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


