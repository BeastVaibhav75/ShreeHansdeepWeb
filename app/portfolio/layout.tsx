import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://shreehansdeep.com";

export const metadata: Metadata = {
  title: "Portfolio | Shree Hans Deep Wood Works & Saw Mills",
  description: "View our gallery of completed projects including modern sofa designs, dining sets, industrial packing products, office interiors, and custom furniture. See our quality craftsmanship.",
  keywords: [
    "furniture portfolio",
    "wood works projects",
    "custom furniture gallery",
    "completed projects",
    "furniture showcase",
    "wood works portfolio",
  ],
  openGraph: {
    title: "Portfolio | Shree Hans Deep Wood Works",
    description: "Gallery of our completed furniture and wood works projects",
    url: `${siteUrl}/portfolio`,
  },
  alternates: {
    canonical: `${siteUrl}/portfolio`,
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


