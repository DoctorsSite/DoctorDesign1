import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, lazy, Suspense, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import doctorPortrait from "@/assets/doctor-portrait.jpg";
import { useTheme } from "@/lib/theme";

const HeroScene = lazy(() => import("@/components/three/hero-scene").then(m => ({ default: m.HeroScene })));

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const { theme, toggle } = useTheme();
  const isInView = useInView(ref, { margin: "0px 0px -100px 0px" });
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          {isInView && <HeroScene />}
        </Suspense>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_75%)]" />
      </div>

      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-6 md:px-16"
      >
        <div className="flex items-center gap-2 text-sm tracking-[0.3em] uppercase">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span>AV — Clinic</span>
        </div>
        <ul className="hidden md:flex items-center gap-10 text-xs tracking-[0.25em] uppercase text-muted-foreground">
          <li><a href="#story" className="hover:text-foreground transition">Story</a></li>
          <li><a href="#expertise" className="hover:text-foreground transition">Expertise</a></li>
          <li><a href="#achievements" className="hover:text-foreground transition">Awards</a></li>
          <li><a href="#testimonials" className="hover:text-foreground transition">Patients</a></li>
        </ul>
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="rounded-full border border-border p-2 text-muted-foreground hover:text-foreground hover:bg-primary/10 transition"
          >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <a href="#consult" className="hidden md:inline-flex rounded-full border border-border px-5 py-2 text-xs tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition">
            Consult
          </a>
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="md:hidden rounded-full border border-border p-2 text-muted-foreground hover:text-foreground transition"
          >
            <Menu size={16} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-10 md:hidden"
        >
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="absolute top-6 right-6 rounded-full border border-border p-2 text-muted-foreground hover:text-foreground transition"
          >
            <X size={16} />
          </button>
          {[
            { href: "#story", label: "Story" },
            { href: "#expertise", label: "Expertise" },
            { href: "#achievements", label: "Awards" },
            { href: "#testimonials", label: "Patients" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl tracking-[0.3em] uppercase text-foreground/80 hover:text-foreground transition"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#consult"
            onClick={() => setMenuOpen(false)}
            className="mt-4 rounded-full border border-border px-8 py-3 text-sm tracking-[0.25em] uppercase hover:bg-primary hover:text-primary-foreground transition"
          >
            Consult
          </a>
        </motion.div>
      )}

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-24 text-center">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.6em" }}
          animate={{ opacity: 1, letterSpacing: "0.4em" }}
          transition={{ duration: 1.6, delay: 0.4 }}
          className="mb-8 text-[10px] uppercase tracking-[0.4em] text-primary md:text-xs"
        >
          Cardiothoracic Surgeon · Researcher · Author
        </motion.p>

        <h1 className="relative text-[clamp(3.5rem,12vw,11rem)] leading-[0.92] tracking-tight">
          {["Adrian", "Vale"].map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 80, rotateX: -45 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1.2, delay: 0.6 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="block text-gradient-fade"
              style={{ transformPerspective: 1000 }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-10 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base"
        >
          Two decades restoring the human heart. A private practice built on precision, research, and quiet trust.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-12 flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          <span className="h-px w-12 bg-border" />
          Scroll
          <span className="h-px w-12 bg-border" />
        </motion.div>
      </motion.div>

      {/* Floating portrait card */}
      <motion.div
        initial={{ opacity: 0, y: 100, rotateY: 15 }}
        animate={{ opacity: 1, y: 0, rotateY: 0 }}
        transition={{ duration: 1.6, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-12 right-8 z-20 hidden md:block"
        style={{ transformPerspective: 1200 }}
      >
        <div className="glass-panel rounded-2xl p-3 animate-float-slow">
          <img
            src={doctorPortrait}
            alt="Dr. Adrian Vale"
            width={180}
            height={220}
            className="h-[220px] w-[180px] rounded-xl object-cover"
          />
          <div className="px-2 pt-3 pb-1">
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">In practice since</p>
            <p className="text-2xl text-gradient-gold">2004</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
