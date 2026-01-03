import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://shreehansdeep.com";

export const metadata: Metadata = {
  title: "Product Catalog | Shree Hans Deep Wood Works & Saw Mills",
  description: "Browse our complete catalog of home furniture, office furniture, industrial packing materials, custom woodwork, and metal works. Quality products for every need.",
  keywords: [
    "furniture catalog",
    "wood furniture",
    "office furniture catalog",
    "industrial packing catalog",
    "custom woodwork",
    "metal works",
    "furniture products",
  ],
  openGraph: {
    title: "Product Catalog | Shree Hans Deep Wood Works",
    description: "Browse our complete catalog of quality furniture and industrial solutions",
    url: `${siteUrl}/catalog`,
  },
  alternates: {
    canonical: `${siteUrl}/catalog`,
  },
};

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


