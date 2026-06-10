import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const milestones = [
  { year: "2004", title: "Medical Degree", place: "Johns Hopkins School of Medicine", note: "Graduated summa cum laude" },
  { year: "2010", title: "Cardiothoracic Fellowship", place: "Cleveland Clinic", note: "Specialized in valve reconstruction" },
  { year: "2014", title: "Lead Surgeon", place: "Mount Sinai Heart Institute", note: "1,200+ operations performed" },
  { year: "2019", title: "Research Chair", place: "Vale Institute for Cardiac Innovation", note: "Founded private research practice" },
  { year: "2024", title: "Published Author", place: "Quiet Surgery — Penguin", note: "Bestselling memoir on patient-first care" },
];

export function Story() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section id="story" ref={ref} className="relative px-6 py-40 md:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-24 max-w-2xl"
        >
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-primary">Chapter One</p>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] leading-[1] text-gradient-fade">
            A career measured in <em className="font-light italic text-accent">heartbeats</em>.
          </h2>
        </motion.div>

        <div className="relative grid grid-cols-[80px_1fr] gap-8 md:grid-cols-[160px_1fr] md:gap-16">
          {/* Animated vertical line */}
          <div className="relative col-start-1 row-span-full flex justify-end pr-2 md:pr-6">
            <div className="relative h-full w-px bg-border">
              <motion.div style={{ height: lineHeight }} className="absolute left-0 top-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
            </div>
          </div>

          <div className="col-start-2 flex flex-col gap-32">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: 60, rotateY: -15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 1, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformPerspective: 1000 }}
                className="relative"
              >
                <div className="absolute -left-[3.5rem] md:-left-[5.5rem] top-3 flex items-center">
                  <div className="relative">
                    <div className="h-3 w-3 rounded-full bg-primary" />
                    <div className="absolute inset-0 rounded-full bg-primary animate-pulse-ring" />
                  </div>
                </div>
                <p className="mb-2 text-5xl text-gradient-gold md:text-7xl">{m.year}</p>
                <h3 className="mb-2 text-2xl md:text-3xl">{m.title}</h3>
                <p className="text-sm uppercase tracking-[0.2em] text-primary/80">{m.place}</p>
                <p className="mt-3 max-w-md text-muted-foreground">{m.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
