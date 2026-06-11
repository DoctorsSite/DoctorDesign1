import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const awards = [
  { year: "2023", title: "Distinguished Surgeon Award", body: "American College of Cardiology" },
  { year: "2022", title: "Innovator of the Year", body: "Society of Thoracic Surgeons" },
  { year: "2021", title: "Hippocrates Medal", body: "European Cardiac Forum" },
  { year: "2020", title: "Research Excellence", body: "National Institute of Health" },
  { year: "2019", title: "Teaching Honor", body: "Mount Sinai Faculty" },
  { year: "2018", title: "Patient Choice Top 1%", body: "Vitals Global Index" },
];

export function Achievements() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-25%"]);

  return (
    <section id="achievements" ref={ref} className="relative py-40 overflow-hidden">
      <div className="px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-7xl mb-20"
        >
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-primary">Recognition</p>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] leading-[1] text-gradient-fade max-w-3xl">
            Honored by peers,<br />humbled by patients.
          </h2>
        </motion.div>
      </div>

      <motion.div style={{ x }} className="flex gap-8 px-6 md:px-16 will-change-transform">
        {awards.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 50, rotateY: 25 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 1, delay: i * 0.06 }}
            style={{ transformPerspective: 1200 }}
            className="glass-panel flex h-[380px] w-[280px] shrink-0 flex-col justify-between rounded-2xl p-6 sm:h-[420px] sm:w-[320px] sm:p-8 md:h-[480px] md:w-[360px] md:rounded-3xl"
          >
            <div>
              <div className="mb-8 flex items-start justify-between">
                <span className="text-gradient-gold text-4xl">{a.year}</span>
                <div className="h-12 w-12 rounded-full border border-accent/40 flex items-center justify-center">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                </div>
              </div>
              <h3 className="text-2xl leading-tight md:text-3xl">{a.title}</h3>
            </div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{a.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
