"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Diamond, Crown, Users, Clock, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Diamond,
    title: "Creative Concepts",
    desc: "Original, tailor-made designs that reflect your personal style and vision — no two Prime Events are ever alike.",
    num: "01",
  },
  {
    icon: Crown,
    title: "Premium Decoration",
    desc: "Exclusive access to high-end props, luxurious imported fabrics, and the finest seasonal florals money can buy.",
    num: "02",
  },
  {
    icon: Users,
    title: "Professional Team",
    desc: "Expert artisans, florists, lighting designers, and event planners — each a master of their craft — dedicated to flawless execution.",
    num: "03",
  },
  {
    icon: Clock,
    title: "On-Time Execution",
    desc: "Meticulous timeline management ensuring every element is perfect and in place before the very first guest arrives.",
    num: "04",
  },
  {
    icon: HeartHandshake,
    title: "Client-Focused Service",
    desc: "Transparent communication, flexible packages, and a personal concierge approach — your peace of mind is our priority.",
    num: "05",
  },
];

export default function WhyUsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-us" ref={ref} className="py-[120px] px-6 md:px-20 max-w-[1440px] mx-auto relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#D4AF37]/5 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass-panel rounded-full px-5 py-2 mb-6"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F2CA50]" style={{ fontFamily: "var(--font-inter)" }}>
            Why Choose Us
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-playfair text-4xl md:text-5xl font-bold text-[#e5e2e1] mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          The Prime{" "}
          <span className="gold-gradient-text italic">Difference</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-lg text-[#d0c5af] max-w-2xl mx-auto"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          An unwavering commitment to excellence and innovation in every event we design.
        </motion.p>
      </div>

      {/* Concierge List */}
      <div className="max-w-4xl mx-auto">
        {reasons.map((reason, i) => {
          const Icon = reason.icon;
          return (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.12 }}
              className="flex items-start gap-8 py-9 border-b border-white/5 group hover:bg-white/[0.02] transition-all duration-300 px-4 rounded-xl cursor-default"
            >
              {/* Number */}
              <span
                className="text-5xl font-bold text-[#D4AF37]/15 group-hover:text-[#D4AF37]/30 transition-colors duration-300 flex-shrink-0 w-14 text-right leading-none mt-1"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {reason.num}
              </span>

              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl glass-gold flex items-center justify-center group-hover:scale-110 group-hover:shadow-gold-sm transition-all duration-500 mt-0.5">
                <Icon className="w-5 h-5 text-[#F2CA50]" strokeWidth={1.5} />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h3
                  className="text-xl font-semibold text-[#e5e2e1] mb-2 group-hover:text-[#F2CA50] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {reason.title}
                </h3>
                <p className="text-[#d0c5af] leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                  {reason.desc}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-[#D4AF37]/50 mt-1">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA strip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mt-20 glass-panel rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 border-[#D4AF37]/15"
      >
        <div>
          <h3
            className="text-2xl font-bold text-[#e5e2e1] mb-2"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ready to experience the Prime difference?
          </h3>
          <p className="text-[#d0c5af]" style={{ fontFamily: "var(--font-inter)" }}>
            Let's create something extraordinary together.
          </p>
        </div>
        <div className="flex gap-4 flex-shrink-0">
          <a href="#contact" className="btn-primary">Start Planning</a>
          <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="btn-outline">
            WhatsApp Us
          </a>
        </div>
      </motion.div>
    </section>
  );
}
