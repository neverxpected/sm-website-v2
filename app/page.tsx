import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Switch Media Marketing — AI-Powered Advertising",
  description:
    "Switch Media Marketing delivers expert digital advertising and AI system integration services to grow your business.",
};

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Hero />
    </main>
  );
}
