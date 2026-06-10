import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 4200, suffix: "+", label: "Patients Treated" },
  { value: 21, suffix: "", label: "Years Practicing" },
  { value: 98.6, suffix: "%", label: "Surgical Success", decimals: 1 },
  { value: 4.97, suffix: "/5", label: "Patient Rating", decimals: 2 },
];

function Counter({ to, decimals = 0, suffix }: { to: number; decimals?: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const mv = useMotionValue(0);
  const display = useTransform(mv, (v) => v.toFixed(decimals));

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 2.4, ease: [0.16, 1, 0.3, 1] });
      return controls.stop;
    }
  }, [inView, mv, to]);

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
      <span className="text-accent">{suffix}</span>
    </span>
  );
}

export function Metrics() {
  return (
    <section className="relative px-6 py-40 md:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-20 text-xs uppercase tracking-[0.4em] text-primary"
        >
          By the numbers
        </motion.p>
        <div className="grid grid-cols-2 gap-x-8 gap-y-20 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-border pt-8"
            >
              <div className="text-[clamp(2.5rem,6vw,5rem)] leading-none text-gradient-fade">
                <Counter to={s.value} decimals={s.decimals} suffix={s.suffix} />
              </div>
              <p className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
