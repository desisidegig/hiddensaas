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
    default: "HiddenSaaS | New Income Sources for Creators",
    template: "%s | HiddenSaaS",
  },
  description:
    "HiddenSaaS helps creators unlock new income sources by launching software products they can sell directly to their audience.",
  keywords: [
    "HiddenSaaS",
    "income sources for creators",
    "new income stream for creators",
    "creator monetization",
    "software creators can sell",
    "sell software to your audience",
    "white-label software for creators",
    "creator economy software",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HiddenSaaS | New Income Sources for Creators",
    description:
      "We build software products any creator can brand and sell to their audience as a new income source.",
    url: "https://hiddensaas.com",
    siteName: "HiddenSaaS",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "HiddenSaaS | New Income Sources for Creators",
    description:
      "We build software products any creator can brand and sell to their audience as a new income source.",
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
