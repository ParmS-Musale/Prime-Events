"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Flame, Wind, Crown } from "lucide-react";

const effects = [
  {
    icon: Zap,
    title: "Cold Pyro Effects",
    subtitle: "Indoor Sparkler Fountains",
    desc: "Safe, stunning cold sparkler fountains that shoot 2–3 metre golden cascades — the ultimate wow-moment for first dances, grand entries, and cake moments.",
    features: ["Indoor safe", "Zero heat", "Golden sparks", "Remote trigger"],
    img: "/assets/effect1.png",
    glow: "#F2CA50",
  },
  {
    icon: Flame,
    title: "Pyro Gun Effects",
    subtitle: "Hand-Held Sparkle Cannons",
    desc: "Dramatic, hand-held pyro guns firing bursts of golden confetti and sparks — ideal for stage performances, DJ moments, and explosive crowd reactions.",
    features: ["Handheld", "Instant trigger", "Confetti bursts", "Multi-colour"],
    img: "/assets/effect2.png",
    glow: "#D4AF37",
  },
  {
    icon: Wind,
    title: "Smoke & Fog Effects",
    subtitle: "Low-Fog & Atmospheric CO₂",
    desc: "Ethereal low-lying fog and CO₂ cryo jets that create a magical 'dancing on clouds' illusion — perfect for first dances, grand entries, and photo moments.",
    features: ["Low-fog system", "CO₂ cryo jets", "Zero residue", "Instant effect"],
    img: "/assets/effect3.png",
    glow: "#e5e2e1",
  },
  {
    icon: Crown,
    title: "Grand Entry Concepts",
    subtitle: "Cinematic Arrival Experiences",
    desc: "Choreographed grand entries with flower tunnels, petal showers, spotlight walks, drum processions, and complete smoke-and-pyro synergy — your entrance, unforgettable.",
    features: ["Flower tunnels", "Petal showers", "Drum dhol", "Spotlight sync"],
    img: "/assets/effect4.png",
    glow: "#F2CA50",
  },
];

export default function SpecialEffectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="effects" ref={ref} className="py-[120px] px-6 md:px-20 bg-[#0e0e0e] relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#D4AF37]/4 blur-[150px] rounded-full pointer-events-none" />

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
              Special Effects
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-playfair text-4xl md:text-5xl font-bold text-[#e5e2e1] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Spectacular{" "}
            <span className="gold-gradient-text italic">Effects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg text-[#d0c5af] max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Add theatrical magic to your event with our professional special effects — safe, stunning, and unforgettable.
          </motion.p>
        </div>

        {/* Effects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {effects.map((effect, i) => {
            const Icon = effect.icon;
            return (
              <motion.div
                key={effect.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.15 }}
                className="group relative overflow-hidden rounded-3xl border border-white/8 hover:border-[#D4AF37]/25 transition-all duration-700 cursor-default"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${effect.img}')` }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/30" />
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: `radial-gradient(ellipse at bottom left, ${effect.glow}15 0%, transparent 60%)` }}
                />

                {/* Content */}
                <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-end min-h-[380px]">
                  {/* Top row */}
                  <div className="absolute top-8 left-8 flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl glass-gold flex items-center justify-center group-hover:scale-110 group-hover:shadow-gold-sm transition-all duration-500">
                      <Icon className="w-5 h-5 text-[#F2CA50]" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F2CA50] glass-panel rounded-full px-3 py-1" style={{ fontFamily: "var(--font-inter)" }}>
                      {effect.subtitle}
                    </span>
                  </div>

                  {/* Body */}
                  <div>
                    <h3
                      className="text-2xl font-bold text-[#e5e2e1] mb-3"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {effect.title}
                    </h3>
                    <p className="text-sm text-[#d0c5af] leading-relaxed mb-6" style={{ fontFamily: "var(--font-inter)" }}>
                      {effect.desc}
                    </p>

                    {/* Feature Pills */}
                    <div className="flex flex-wrap gap-2">
                      {effect.features.map((f) => (
                        <span
                          key={f}
                          className="text-[10px] font-semibold uppercase tracking-widest text-[#D4AF37] border border-[#D4AF37]/30 rounded-full px-3 py-1"
                          style={{ fontFamily: "var(--font-inter)" }}
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mt-16"
        >
          <p className="text-[#d0c5af] mb-6" style={{ fontFamily: "var(--font-inter)" }}>
            Add spectacular effects to your event package
          </p>
          <a href="#contact" className="btn-primary">
            Add Special Effects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
