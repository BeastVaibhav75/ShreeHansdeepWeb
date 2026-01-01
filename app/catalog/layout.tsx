import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Catalog | Shree Hans Deep Wood Works & Saw Mills",
  description: "Browse our complete catalog of home furniture, office furniture, industrial packing materials, custom woodwork, and metal works.",
};

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


