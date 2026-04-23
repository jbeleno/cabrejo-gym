"use client";

import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export function SectionTag({ idx, label }: { idx: number | string; label: string }) {
  return (
    <div className="flex items-center gap-4 font-mono text-[11px] tracking-[0.25em] text-white/50 uppercase">
      <span className="text-volt">{String(idx).padStart(2, "0")}</span>
      <span className="h-px w-10 bg-white/30" />
      <span>{label}</span>
    </div>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

export function BigNumber({ n, className = "" }: { n: string; className?: string }) {
  return <span className={`font-display font-black leading-[0.85] tracking-[-0.04em] ${className}`}>{n}</span>;
}

type PillBtnProps = {
  variant?: "solid" | "volt" | "ghost" | "dark";
  className?: string;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function PillBtn({ variant = "solid", className = "", children, ...rest }: PillBtnProps) {
  const base = "inline-flex items-center gap-3 px-6 py-4 font-bold uppercase text-[13px] tracking-[0.16em] transition-all duration-300";
  const variants: Record<string, string> = {
    solid: "bg-white text-ink hover:bg-volt hover:-translate-y-0.5",
    volt: "bg-volt text-ink hover:bg-white hover:-translate-y-0.5",
    ghost: "border border-white/25 text-white hover:border-volt hover:text-volt",
    dark: "bg-ink text-white border border-white/10 hover:border-volt",
  };
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}

export function Marquee({ items, accent = false, speed = "45s" }: { items: string[]; accent?: boolean; speed?: string }) {
  const content = (
    <div className="marquee-group flex items-center gap-10 pr-10">
      {items.map((t, i) => (
        <div key={i} className="flex items-center gap-10">
          <span className={`font-display font-black italic uppercase tracking-tight text-[clamp(2.5rem,7vw,7rem)] leading-none ${accent ? "text-volt" : "text-white"}`}>
            {t}
          </span>
          <span className={`h-3 w-3 rounded-full ${accent ? "bg-white" : "bg-volt"}`} />
        </div>
      ))}
    </div>
  );
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-ink py-6">
      <div className="flex marquee-track" style={{ animationDuration: speed }}>
        {content}
        {content}
      </div>
    </div>
  );
}
