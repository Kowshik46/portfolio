import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { portfolioData } from "@/lib/portfolio-data";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${portfolioData.person.name} | AI Architect & Senior AI Engineer`,
  description:
    "Production AI architect portfolio featuring agentic systems, RAG pipelines, ML platforms, optimization engines, and enterprise-scale delivery outcomes.",
  keywords: [
    "AI Architect",
    "Senior AI Engineer",
    "Generative AI",
    "Agentic AI",
    "LangGraph",
    "RAG",
    "Machine Learning",
    "Data Platforms",
    "Portfolio",
  ],
  authors: [{ name: portfolioData.person.name }],
  creator: portfolioData.person.name,
  alternates: {
    canonical: portfolioData.person.website,
  },
  openGraph: {
    title: `${portfolioData.person.name} | AI Architect & Senior AI Engineer`,
    description:
      "Designing agentic AI platforms, optimization engines, and ML systems that turn enterprise complexity into measurable outcomes.",
    url: portfolioData.person.website,
    siteName: portfolioData.person.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.person.name} | AI Architect & Senior AI Engineer`,
    description:
      "Portfolio focused on GenAI, agent systems, ML deployment, and architect-level AI system design.",
  },
};

export const viewport = {
  themeColor: "#050816",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans text-foreground">{children}</body>
    </html>
  );
}
