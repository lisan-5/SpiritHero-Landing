"use client";

import { useEffect, useRef } from "react";

type RevealDirection = "up" | "left" | "right" | "scale" | "blur";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number;
  className?: string;
}

export function ScrollReveal({ children, direction = "up", delay = 0, className = "" }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            // Apply delay before revealing
            if (delay > 0) {
              setTimeout(() => {
                entry.target.classList.add("revealed");
              }, delay);
            } else {
              entry.target.classList.add("revealed");
            }
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`scroll-reveal scroll-reveal--${direction} ${className}`}>
      {children}
    </div>
  );
}
