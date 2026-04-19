import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Enes Turan — IT & Digital Transformation",
  description:
    "IT and Digital Transformation professional specializing in AI-enabled solutions, requirements analysis, and process optimization.",
  keywords: [
    "Enes Turan",
    "IT Consultant",
    "Digital Transformation",
    "AI Solutions",
    "Business Analyst",
  ],
  authors: [{ name: "Enes Turan" }],
  openGraph: {
    title: "Enes Turan — IT & Digital Transformation",
    description:
      "IT and Digital Transformation professional specializing in AI-enabled solutions.",
    url: "https://enesturan.net",
    siteName: "Enes Turan",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Enes Turan — IT & Digital Transformation",
    description:
      "IT and Digital Transformation professional specializing in AI-enabled solutions.",
  },
  metadataBase: new URL("https://enesturan.net"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
