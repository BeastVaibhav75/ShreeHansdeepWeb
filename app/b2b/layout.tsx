import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://shreehansdeep.com";

export const metadata: Metadata = {
  title: "B2B Solutions | Shree Hans Deep Wood Works & Saw Mills",
  description: "B2B industrial solutions, bulk furniture orders, industrial packing materials, and custom manufacturing for businesses. Competitive pricing and reliable supply. Serving factories, warehouses, offices, and institutions across Haryana.",
  keywords: [
    "B2B furniture",
    "bulk furniture orders",
    "industrial packing materials",
    "custom manufacturing",
    "B2B wood works",
    "industrial solutions",
    "factory furniture",
    "warehouse solutions",
  ],
  openGraph: {
    title: "B2B Solutions | Shree Hans Deep Wood Works",
    description: "B2B industrial solutions, bulk furniture orders, and custom manufacturing for businesses",
    url: `${siteUrl}/b2b`,
  },
  alternates: {
    canonical: `${siteUrl}/b2b`,
  },
};

export default function B2BLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


