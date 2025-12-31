import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Shree Hans Deep Wood Works & Saw Mills",
  description: "Learn about our experience in woodworks, saw mills, and commitment to quality craftsmanship in furniture and industrial solutions.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

