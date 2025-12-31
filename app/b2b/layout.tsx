import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B Solutions | Shree Hans Deep Wood Works & Saw Mills",
  description: "B2B industrial solutions, bulk furniture orders, industrial packing materials, and custom manufacturing for businesses. Competitive pricing and reliable supply.",
};

export default function B2BLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

