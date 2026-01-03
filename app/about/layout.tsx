import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://shreehansdeep.com";

export const metadata: Metadata = {
  title: "About Us | Shree Hans Deep Wood Works & Saw Mills",
  description: "Learn about our experience in woodworks, saw mills, and commitment to quality craftsmanship in furniture and industrial solutions. Serving Haryana with premium wood and metal works.",
  keywords: [
    "wood works Haryana",
    "saw mills",
    "furniture manufacturer",
    "wood craftsmen",
    "quality furniture",
    "experienced woodworkers",
  ],
  openGraph: {
    title: "About Us | Shree Hans Deep Wood Works",
    description: "Experienced woodworks and saw mills with commitment to quality craftsmanship",
    url: `${siteUrl}/about`,
  },
  alternates: {
    canonical: `${siteUrl}/about`,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


