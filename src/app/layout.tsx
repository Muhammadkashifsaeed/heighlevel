import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DigiStartup | Done-For-You GoHighLevel CRM & Automation Agency",
  description: "DigiStartup provides complete GoHighLevel CRM setup, AI automation, N8N workflow development, conversion-focused funnel building, and dedicated GoHighLevel Virtual Assistants for agencies, coaches, and SaaS companies.",
  keywords: ["GoHighLevel", "CRM setup", "AI automation", "N8N workflows", "funnel building", "virtual assistant", "agency automation", "white-label support"],
  authors: [{ name: "DigiStartup" }],
  openGraph: {
    title: "DigiStartup | Done-For-You GoHighLevel CRM & Automation Agency",
    description: "Complete GoHighLevel CRM setup, AI automation, N8N workflow development, and dedicated virtual assistants for agencies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiStartup | Done-For-You GoHighLevel CRM & Automation Agency",
    description: "Complete GoHighLevel CRM setup, AI automation, N8N workflow development, and dedicated virtual assistants for agencies.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
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
      <body className="min-h-full flex flex-col pt-20">
        <Header />
        {children}
      </body>
    </html>
  );
}
