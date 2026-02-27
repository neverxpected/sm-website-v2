import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Switch Media Marketing — AI Systems & Precision Advertising for High-Ticket Brands",
  description:
    "Switch Media Marketing builds autonomous AI systems and high-performance ad engines that scale revenue for MedSpas, high-ticket fitness brands, and enterprise clients worldwide.",
};

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="relative z-10">
        <Hero />
      </div>
    </main>
  );
}
