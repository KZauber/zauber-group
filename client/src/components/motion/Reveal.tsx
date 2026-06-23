import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  /** Stagger sibling sections by passing an increasing delay (seconds). */
  delay?: number;
  className?: string;
  /** "up" (default) or "none" for a pure fade with no travel. */
  direction?: "up" | "none";
}

/**
 * Scroll-reveal wrapper. Sections fade + rise in as they enter the viewport,
 * once. Honors prefers-reduced-motion: users who ask for less motion get the
 * content immediately with no transform — premium sites turn animation off
 * for those users instead of forcing it on everyone.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  direction = "up",
}: Props) {
  const reduceMotion = useReducedMotion();

  const hidden =
    reduceMotion || direction === "none"
      ? { opacity: 0 }
      : { opacity: 0, y: 32 };

  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: reduceMotion ? 0.2 : 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: reduceMotion ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  );
}
