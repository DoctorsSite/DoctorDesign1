import { createFileRoute } from "@tanstack/react-router";
import { useLenis } from "@/hooks/use-lenis";
import { Hero } from "@/components/sections/hero";
import { Story } from "@/components/sections/story";
import { Expertise } from "@/components/sections/expertise";
import { Achievements } from "@/components/sections/achievements";
import { Metrics } from "@/components/sections/metrics";
import { Testimonials } from "@/components/sections/testimonials";
import { Philosophy } from "@/components/sections/philosophy";
import { Consult } from "@/components/sections/consult";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Adrian Vale — Cardiothoracic Surgeon" },
      { name: "description", content: "Two decades of cardiothoracic excellence. The private practice of Dr. Adrian Vale — surgeon, researcher, author." },
      { property: "og:title", content: "Dr. Adrian Vale — Cardiothoracic Surgeon" },
      { property: "og:description", content: "Two decades of cardiothoracic excellence." },
    ],
  }),
  component: Index,
});

function Index() {
  useLenis();
  return (
    <main className="relative bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 z-[1] grain-overlay" />
      <Hero />
      <Story />
      <Expertise />
      <Achievements />
      <Metrics />
      <Testimonials />
      <Philosophy />
      <Consult />
    </main>
  );
}
