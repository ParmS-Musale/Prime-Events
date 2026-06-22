"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, PenTool, Layers, Wrench, PartyPopper } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    desc: "We begin with a deep-dive consultation to understand your vision, style preferences, guest count, and budget — building a complete picture of your dream event.",
    color: "#F2CA50",
  },
  {
    icon: PenTool,
    title: "Planning",
    desc: "Our team crafts a meticulous event blueprint — vendor selection, moodboard creation, timeline scheduling, and logistics planning — all tailored to perfection.",
    color: "#D4AF37",
  },
  {
    icon: Layers,
    title: "Design",
    desc: "We bring the vision to life on paper first — 3D layouts, colour palettes, floral mock-ups, and lighting plans — so you can see your event before it happens.",
    color: "#C5A028",
  },
  {
    icon: Wrench,
    title: "Setup",
    desc: "Our master artisans arrive early to meticulously install every element. No detail is too small — from the angle of a centrepiece to the hue of ambient lighting.",
    color: "#E9C349",
  },
  {
    icon: PartyPopper,
    title: "Event Execution",
    desc: "On the day, our on-site coordinator manages everything seamlessly — so you can be fully present and savour every precious moment of your celebration.",
    color: "#F2CA50",
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" ref={ref} className="py-[120px] px-6 md:px-20 bg-[#0e0e0e] relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass-panel rounded-full px-5 py-2 mb-6"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F2CA50]" style={{ fontFamily: "var(--font-inter)" }}>
              How It Works
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-playfair text-4xl md:text-5xl font-bold text-[#e5e2e1] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our{" "}
            <span className="gold-gradient-text italic">Process</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg text-[#d0c5af] max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            From first conversation to final curtain — five seamless steps to your perfect event.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent -translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.15 + i * 0.15 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 glass-panel rounded-2xl p-8 glass-panel-hover transition-all duration-500 group ${isLeft ? "lg:text-right" : "lg:text-left"}`}>
                    <div className={`flex items-center gap-4 mb-4 ${isLeft ? "lg:flex-row-reverse" : ""}`}>
                      <div className="w-12 h-12 rounded-xl glass-gold flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-gold-sm transition-all duration-500">
                        <Icon className="w-6 h-6 text-[#F2CA50]" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]" style={{ fontFamily: "var(--font-inter)" }}>
                        Step {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3
                      className="text-xl font-bold text-[#e5e2e1] mb-3 group-hover:text-[#F2CA50] transition-colors duration-300"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[#d0c5af] leading-relaxed text-sm" style={{ fontFamily: "var(--font-inter)" }}>
                      {step.desc}
                    </p>
                  </div>

                  {/* Central Node */}
                  <div className="relative flex-shrink-0 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.15, type: "spring" }}
                      className="w-14 h-14 rounded-full border-2 border-[#D4AF37] bg-[#0A0A0A] flex items-center justify-center shadow-gold"
                    >
                      <span
                        className="text-lg font-bold gold-gradient-text"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        {i + 1}
                      </span>
                    </motion.div>
                    <div className="absolute inset-0 rounded-full bg-[#D4AF37]/10 animate-pulse" />
                  </div>

                  {/* Spacer on mobile */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
