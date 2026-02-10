import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BizDays Global — Business Days Calculator",
  description:
    "Calculate delivery dates excluding weekends and public holidays for 100+ countries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
