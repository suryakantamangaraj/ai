import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Surya Singularity — One Place for All AI Solutions",
    template: "%s | Surya Singularity",
  },
  description:
    "Surya Singularity is an open-source AI hub that combines curated AI tools, prompt engineering resources, and a unified chat interface with open-source models — all in one place.",
  keywords: [
    "AI tools",
    "prompt engineering",
    "AI chat",
    "open source AI",
    "AI hub",
    "Surya Singularity",
    "LLM",
    "prompt templates",
  ],
  authors: [{ name: "Surya Raj", url: "https://suryaraj.com" }],
  creator: "Surya Raj",
  metadataBase: new URL("https://ai.suryaraj.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ai.suryaraj.com",
    siteName: "Surya Singularity",
    title: "Surya Singularity — One Place for All AI Solutions",
    description:
      "Open-source AI hub combining curated tools, prompt engineering, and unified chat with open-source models.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Surya Singularity — One Place for All AI Solutions",
    description:
      "Open-source AI hub combining curated tools, prompt engineering, and unified chat with open-source models.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body 
        className="min-h-screen flex flex-col antialiased"
        suppressHydrationWarning
      >
        <Providers>
          <Header />
          <main className="flex-1 pt-24">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
