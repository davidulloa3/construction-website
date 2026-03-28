"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description:
      "We visit your home, assess the scope, and discuss your vision — at no cost and no obligation.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#1565c0]" aria-hidden="true">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Custom Proposal",
    description:
      "You receive a detailed written estimate covering materials, timeline, and total cost. No hidden fees, no surprises.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#1565c0]" aria-hidden="true">
        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Expert Build",
    description:
      "Our licensed OC crew gets to work with daily progress updates and strict quality checkpoints at every stage.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#1565c0]" aria-hidden="true">
        <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Final Walkthrough",
    description:
      "We walk through every detail with you before considering the job complete. Your satisfaction is the standard.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#1565c0]" aria-hidden="true">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      </svg>
    ),
  },
];

function AnimatedCard({
  children,
  direction,
}: {
  children: React.ReactNode;
  direction: "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transition: "opacity 0.5s ease, transform 0.5s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : direction === "left" ? "translateX(-40px)" : "translateX(40px)",
      }}
    >
      {children}
    </div>
  );
}

export default function ZigzagTimeline() {
  return (
    <section className="py-20 bg-[#1a1a1a]" aria-labelledby="zigzag-timeline-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#1565c0] font-semibold text-sm uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2 id="zigzag-timeline-heading" className="text-4xl sm:text-5xl font-black text-[#f5f5f5]">
            Simple Steps.
            <br />
            <span className="text-[#1565c0]">No Surprises.</span>
          </h2>
        </div>

        {/* Desktop zigzag */}
        <div className="hidden md:block relative">
          {/* Center spine */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#1565c0] -translate-x-px"
            aria-hidden="true"
          />

          <ol className="space-y-16" role="list">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <li key={step.number} className="relative flex items-center gap-0">
                  {/* Left side */}
                  <div className="w-1/2 pr-12 flex justify-end">
                    {isLeft ? (
                      <AnimatedCard direction="left">
                        <StepCard step={step} />
                      </AnimatedCard>
                    ) : (
                      <div aria-hidden="true" />
                    )}
                  </div>

                  {/* Spine dot */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#1565c0] border-3 border-[#f5f5f5] z-10 flex-shrink-0"
                    style={{ border: "3px solid #f5f5f5" }}
                    aria-hidden="true"
                  />

                  {/* Right side */}
                  <div className="w-1/2 pl-12 flex justify-start">
                    {!isLeft ? (
                      <AnimatedCard direction="right">
                        <StepCard step={step} />
                      </AnimatedCard>
                    ) : (
                      <div aria-hidden="true" />
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Mobile vertical stack */}
        <div className="md:hidden relative">
          {/* Left spine */}
          <div
            className="absolute left-5 top-0 bottom-0 w-0.5 bg-[#1565c0]"
            aria-hidden="true"
          />
          <ol className="space-y-8 pl-14" role="list">
            {steps.map((step) => (
              <li key={step.number} className="relative">
                {/* Dot on spine */}
                <div
                  className="absolute -left-9 top-6 w-5 h-5 rounded-full bg-[#1565c0] z-10"
                  style={{ border: "3px solid #f5f5f5" }}
                  aria-hidden="true"
                />
                <StepCard step={step} />
              </li>
            ))}
          </ol>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#1565c0] hover:bg-[#1e88e5] text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-[#1565c0]/25"
          >
            Start with a Free Consultation
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function StepCard({ step }: { step: (typeof steps)[0] }) {
  return (
    <div className="bg-[#0f0f0f] border border-[#2a2a2a] hover:border-[#1565c0] rounded-xl p-7 transition-all hover:shadow-[0_0_20px_rgba(21,101,192,0.15)] group relative w-full max-w-sm">
      {/* Icon top-right */}
      <div className="absolute top-5 right-5">{step.icon}</div>

      {/* Step label */}
      <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#1565c0] mb-1">
        Step {step.number}
      </p>

      {/* Watermark number */}
      <div className="relative mb-1">
        <span
          className="absolute -top-2 -left-1 text-5xl font-black text-[#1565c0] select-none pointer-events-none"
          style={{ opacity: 0.12 }}
          aria-hidden="true"
        >
          {step.number}
        </span>
        <h3 className="text-lg font-semibold text-[#f5f5f5] relative z-10 pt-2">
          {step.title}
        </h3>
      </div>

      <p className="text-sm text-[#a0a0a0] leading-relaxed">{step.description}</p>
    </div>
  );
}
