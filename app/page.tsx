import type { Metadata } from "next";
import HeroSwitch from "@/components/HeroSwitch";

export const metadata: Metadata = {
  title: "Houston AI Agency — AI Systems & Precision Advertising",
  description:
    "Houston AI Agency builds autonomous AI systems and high-performance ad engines that scale revenue across every timezone.",
};

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="relative z-10">
        <HeroSwitch />
      </div>
    </main>
  );
}
