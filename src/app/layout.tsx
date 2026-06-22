import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Prime Events | Luxury Event Management & Premium Decor",
  description: "Crafting extraordinary celebrations with unparalleled elegance. Premium event management, destination weddings, and corporate galas across India.",
  keywords: ["Luxury Events", "Wedding Planner", "Event Management", "Premium Decor", "Destination Weddings India"],
  openGraph: {
    title: "Prime Events | Luxury Event Management",
    description: "Where luxury meets perfection in every detail. We transform your vision into unforgettable experiences.",
    type: "website",
    locale: "en_IN",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-[#0A0A0A] text-[#e5e2e1]`}>
        {children}
      </body>
    </html>
  );
}
