import { motion } from "framer-motion";

const testimonials = [
  { quote: "He gave me back twenty years. The kind of surgeon you'd want operating on someone you love.", name: "Eleanor R.", role: "Mitral repair, 2023" },
  { quote: "Calm, exacting, deeply human. Every question answered, every fear acknowledged.", name: "Marcus T.", role: "Triple bypass, 2022" },
  { quote: "I flew from Singapore. I would do it again without hesitation.", name: "Lin H.", role: "Second opinion, 2024" },
  { quote: "There is a quiet authority about him that makes the operating room feel like the safest place on earth.", name: "Dr. Anya P.", role: "Referring physician" },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden px-6 py-40 md:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-24 max-w-2xl"
        >
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-primary">In their words</p>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] leading-[1] text-gradient-fade">
            The stories that <em className="italic font-light text-accent">stay with me</em>.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel rounded-3xl p-8"
            >
              <span className="text-gradient-gold text-5xl leading-none font-display">"</span>
              <p className="mt-4 text-base leading-relaxed text-foreground/90">{t.quote}</p>
              <div className="mt-10 border-t border-border pt-4">
                <p className="text-sm">{t.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
