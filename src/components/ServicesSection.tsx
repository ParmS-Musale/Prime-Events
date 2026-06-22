"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Sparkles, Cake, Palette, Baby, Flower2, Briefcase,
  Mic2, Heart, Star, Zap, Wind, Flame, Crown, CalendarCheck
} from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Wedding Decoration",
    desc: "Transforming venues into breathtaking romantic spaces tailored to your unique love story with opulent floral arches and crystal chandeliers.",
    tag: "Most Popular",
  },
  {
    icon: Cake,
    title: "Birthday Decoration",
    desc: "Curating joyful and elegant atmospheres for milestones worth celebrating in high style — from intimate soirées to grand galas.",
    tag: null,
  },
  {
    icon: Palette,
    title: "Theme Decoration",
    desc: "Immersive, detail-oriented conceptual designs that transport your guests to another world — from Vintage Glam to Ultra-Modern.",
    tag: null,
  },
  {
    icon: Baby,
    title: "Baby Shower",
    desc: "Delicate, sophisticated settings designed to honor new beginnings with grace, whimsy, and charm.",
    tag: null,
  },
  {
    icon: Flower2,
    title: "Flower Decoration",
    desc: "Exquisite, lush floral arrangements acting as living art pieces — seasonal blooms curated for maximum visual impact.",
    tag: null,
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    desc: "Polished, professional environments that elevate your brand identity and leave a lasting impression on stakeholders.",
    tag: null,
  },
  {
    icon: Mic2,
    title: "Stage Decoration",
    desc: "Dramatic focal points designed to command attention and frame key moments with cinematic precision.",
    tag: null,
  },
  {
    icon: Heart,
    title: "Engagement Decoration",
    desc: "Romantic, intimate setups that make your 'Yes' moment forever unforgettable — rose petals, fairy lights and more.",
    tag: null,
  },
  {
    icon: Star,
    title: "Anniversary Decoration",
    desc: "Celebrating years of love with elegant, personalised décor that narrates your beautiful journey together.",
    tag: null,
  },
  {
    icon: Zap,
    title: "Cold Pyro Effects",
    desc: "Safe indoor cold sparkler fountains that create a spectacular golden cascade — perfect for grand entries and first dances.",
    tag: "Spectacular",
  },
  {
    icon: Flame,
    title: "Pyro Gun Effects",
    desc: "Hand-held cold pyro guns shooting bursts of golden sparkles for an explosive, theatrical crowd reaction.",
    tag: null,
  },
  {
    icon: Wind,
    title: "Smoke Effects",
    desc: "Ethereal low-fog and atmospheric CO₂ effects creating a mesmerising 'dancing on clouds' illusion.",
    tag: null,
  },
  {
    icon: Crown,
    title: "Grand Entry Concepts",
    desc: "Cinematic arrivals — from floral tunnels and petal showers to smoke walks and spotlight entrances.",
    tag: "Premium",
  },
  {
    icon: CalendarCheck,
    title: "Event Planning & Management",
    desc: "End-to-end event management — vendor coordination, timeline mastery, on-the-day execution — flawlessly handled.",
    tag: null,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" ref={ref} className="py-[120px] px-6 md:px-20 bg-[#0e0e0e] relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#D4AF37]/4 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass-panel rounded-full px-5 py-2 mb-6"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F2CA50]" style={{ fontFamily: "var(--font-inter)" }}>
              What We Offer
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-playfair text-4xl md:text-5xl font-bold text-[#e5e2e1] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Bespoke{" "}
            <span className="gold-gradient-text italic">Services</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-px w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-6"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg text-[#d0c5af] max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Every detail curated. Every moment elevated. Fourteen signature services crafted for perfection.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                className="glass-panel rounded-2xl p-7 flex flex-col gap-4 cursor-default group relative overflow-hidden transition-all duration-500 hover:border-[#D4AF37]/25 hover:shadow-gold"
              >
                {/* Hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent rounded-2xl transition-opacity duration-500 ${hovered === i ? "opacity-100" : "opacity-0"}`} />

                {/* Tag */}
                {svc.tag && (
                  <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest text-[#0A0A0A] bg-[#D4AF37] px-2.5 py-1 rounded-full" style={{ fontFamily: "var(--font-inter)" }}>
                    {svc.tag}
                  </span>
                )}

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl glass-gold flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-gold-sm transition-all duration-500">
                  <Icon className="w-6 h-6 text-[#F2CA50]" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3
                    className="text-lg font-semibold text-[#e5e2e1] mb-2 group-hover:text-[#F2CA50] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {svc.title}
                  </h3>
                  <p className="text-sm text-[#d0c5af] leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                    {svc.desc}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent transition-all duration-500 ${hovered === i ? "w-full" : "w-0"}`} />
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a href="#contact" className="btn-primary">
            Enquire About a Service
          </a>
        </motion.div>
      </div>
    </section>
  );
}
