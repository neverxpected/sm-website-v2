import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Geist, Orbitron } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Houston AI Agency",
    template: "%s | Houston AI Agency",
  },
  description:
    "Houston AI Agency delivers expert digital advertising and AI system integration services to grow your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${orbitron.variable} antialiased text-black`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
