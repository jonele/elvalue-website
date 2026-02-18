import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "EL VALUE - The Future of Hospitality, Powered by AI",
  description: "EL VALUE provides AI-powered solutions for the hospitality industry: POS systems, loyalty programs, reservations, and B2B ordering. Meet Ella and Theo, your AI assistants.",
  keywords: ["hospitality", "POS", "loyalty", "reservations", "AI", "restaurant", "Cyprus", "Greece"],
  authors: [{ name: "EL VALUE CYPRUS LTD" }],
  openGraph: {
    title: "EL VALUE - The Future of Hospitality, Powered by AI",
    description: "AI-powered solutions for the hospitality industry",
    url: "https://elvalue.com",
    siteName: "EL VALUE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Distinctive fonts: Sora for headlines, Outfit for body */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Noto+Sans+Arabic:wght@300;400;500;600;700&family=Tajawal:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
