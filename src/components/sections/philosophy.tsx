import { motion } from "framer-motion";

const words = "I do not treat hearts. I sit with the people who carry them.".split(" ");

export function Philosophy() {
  return (
    <section className="relative px-6 py-24 md:py-48 md:px-16">
      <div className="mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-12 text-xs uppercase tracking-[0.4em] text-primary"
        >
          Philosophy
        </motion.p>
        <h2 className="text-[clamp(2rem,5vw,4.5rem)] leading-[1.1] font-display font-light">
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-[0.25em] text-gradient-fade"
            >
              {w === "people" ? <em className="italic text-accent">{w}</em> : w}
            </motion.span>
          ))}
        </h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 text-xs uppercase tracking-[0.4em] text-muted-foreground"
        >
          — Adrian Vale, MD
        </motion.p>
      </div>
    </section>
  );
}
