import { motion } from "framer-motion";

const services = [
  { n: "01", title: "Valve Reconstruction", desc: "Minimally invasive mitral and aortic valve repair using bespoke surgical planning." },
  { n: "02", title: "Coronary Bypass", desc: "Off-pump CABG with arterial grafting for long-term outcomes and faster recovery." },
  { n: "03", title: "Thoracic Oncology", desc: "Robotic lung resections in collaboration with the Vale tumor board." },
  { n: "04", title: "Second Opinion", desc: "Comprehensive review of complex cardiothoracic cases for international patients." },
];

export function Expertise() {
  return (
    <section id="expertise" className="relative overflow-hidden px-6 py-24 md:py-40 md:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 md:mb-24"
        >
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-primary">Practice</p>
          <h2 className="text-[clamp(2.5rem,10vw,9rem)] leading-[0.9] text-gradient-fade">
            Precision.<br />
            <em className="italic font-light text-accent">Quietly</em> delivered.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 80, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, rotateX: -2, rotateY: 2 }}
              style={{ transformPerspective: 1200, transformStyle: "preserve-3d" }}
              className="group glass-panel relative overflow-hidden rounded-2xl md:rounded-3xl p-7 md:p-10 transition-shadow hover:shadow-[0_40px_80px_-20px_oklch(0_0_0/0.6)]"
            >
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl transition-opacity group-hover:opacity-70 opacity-30" />
              <div className="relative">
                <p className="mb-12 font-mono text-xs tracking-widest text-muted-foreground">{s.n} / 04</p>
                <h3 className="mb-4 text-3xl md:text-4xl">{s.title}</h3>
                <p className="max-w-md text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-primary">
                  <span>Learn more</span>
                  <span className="h-px w-8 bg-primary transition-all group-hover:w-16" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
