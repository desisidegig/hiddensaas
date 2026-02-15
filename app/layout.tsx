import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["500", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hiddensaas.com"),
  title: {
    default: "HiddenSaaS | White-Label SaaS for Creators",
    template: "%s | HiddenSaaS",
  },
  description:
    "Launch SaaS products your audience will love. You own it, you market it, HiddenSaaS builds and manages it.",
  keywords: [
    "HiddenSaaS",
    "white-label SaaS",
    "creator monetization",
    "build SaaS for creators",
    "creator economy software",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HiddenSaaS | White-Label SaaS for Creators",
    description:
      "Launch SaaS products your audience will love. You own it, you market it, we build and manage it.",
    url: "https://hiddensaas.com",
    siteName: "HiddenSaaS",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "HiddenSaaS | White-Label SaaS for Creators",
    description:
      "Launch SaaS products your audience will love. You own it, you market it, we build and manage it.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${plusJakartaSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
