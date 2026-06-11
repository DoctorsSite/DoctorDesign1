import { motion } from "framer-motion";

export function Consult() {
  return (
    <section id="consult" className="relative px-6 py-40 md:px-16">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass-panel rounded-[1.5rem] md:rounded-[2rem] p-6 sm:p-10 md:p-20"
        >
          <div className="grid gap-8 md:gap-12 md:grid-cols-[1fr_1fr]">
            <div>
              <p className="mb-6 text-xs uppercase tracking-[0.4em] text-primary">Consultation</p>
              <h2 className="text-[clamp(2.5rem,5vw,4rem)] leading-[1] text-gradient-fade">
                Begin a quiet conversation.
              </h2>
              <p className="mt-8 max-w-md text-muted-foreground leading-relaxed">
                Private consultations are scheduled by referral or direct request. Each appointment begins with an hour of unhurried discussion.
              </p>
              <div className="mt-12 space-y-3 text-sm">
                <p className="text-muted-foreground"><span className="text-foreground">Clinic</span> · 80 Park Avenue, NYC</p>
                <p className="text-muted-foreground"><span className="text-foreground">Hours</span> · Mon–Thu, 9 — 4</p>
                <p className="text-muted-foreground"><span className="text-foreground">Direct</span> · concierge@valeclinic.com</p>
              </div>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <Field label="Full name" placeholder="Eleanor Reyes" />
              <Field label="Email" placeholder="you@example.com" type="email" />
              <Field label="Phone" placeholder="+1 (212) 555-0140" type="tel" />
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-muted-foreground">Reason</label>
                <textarea
                  rows={4}
                  placeholder="Briefly describe your situation"
                  className="w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-full bg-primary px-8 py-4 text-sm uppercase tracking-[0.3em] text-primary-foreground transition hover:bg-accent"
              >
                Request a consult
              </button>
            </form>
          </div>
        </motion.div>

        <div className="mt-24 flex flex-col gap-4 border-t border-border pt-10 text-xs uppercase tracking-[0.3em] text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Vale Clinic</span>
          <span>Designed by ZYNTELL</span>
        </div>
      </div>
    </section>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-muted-foreground">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition"
      />
    </div>
  );
}
