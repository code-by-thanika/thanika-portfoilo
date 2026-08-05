import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX: width }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-brand"
    />
  );
}

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-0 hidden h-[26rem] w-[26rem] rounded-full opacity-50 blur-[110px] md:block"
      style={{
        left: pos.x - 208,
        top: pos.y - 208,
        background:
          "radial-gradient(circle, color-mix(in oklab, var(--primary) 45%, transparent), transparent 70%)",
        transition: "left 220ms ease-out, top 220ms ease-out",
      }}
    />
  );
}

export function Aurora() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="animate-aurora absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-primary/20 blur-[140px]" />
      <div className="animate-aurora absolute -right-40 top-1/3 h-[32rem] w-[32rem] rounded-full bg-accent/20 blur-[150px] [animation-delay:-6s]" />
      <div className="animate-aurora absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-[130px] [animation-delay:-12s]" />
    </div>
  );
}

const particles = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  left: (i * 37) % 100,
  size: 2 + (i % 4),
  delay: (i % 8) * 1.3,
  duration: 14 + (i % 6) * 3,
}));

export function Particles() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          initial={{ y: "105vh", opacity: 0 }}
          animate={{ y: "-10vh", opacity: [0, 0.7, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
          className="absolute rounded-full bg-primary/70"
          style={{ left: `${p.left}%`, width: p.size, height: p.size }}
        />
      ))}
    </div>
  );
}

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1300);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
        >
          <div className="flex flex-col items-center gap-5">
            <motion.span
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              className="animate-gradient-text font-display text-5xl font-bold"
            >
              T.
            </motion.span>
            <span className="h-[3px] w-40 overflow-hidden rounded-full bg-secondary">
              <motion.span
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="block h-full w-full bg-gradient-brand"
              />
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
