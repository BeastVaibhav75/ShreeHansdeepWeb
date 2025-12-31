import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Shree Hans Deep Wood Works & Saw Mills",
  description: "View our gallery of completed projects including modern sofa designs, dining sets, industrial packing products, office interiors, and custom furniture.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

