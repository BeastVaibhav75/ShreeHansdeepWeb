import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Shree Hans Deep Wood Works & Saw Mills",
  description: "Get in touch with us for inquiries, quotes, and consultations. Located near NH-48, Rewari Road, Kasola Chowk, Haryana.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

