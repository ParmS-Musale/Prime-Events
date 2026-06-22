"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Users, Clock, Star } from "lucide-react";

const stats = [
  { icon: Award, num: "500+", label: "Events Delivered" },
  { icon: Users, num: "12+", label: "Expert Team Members" },
  { icon: Clock, num: "8+", label: "Years of Excellence" },
  { icon: Star, num: "100%", label: "Client Satisfaction" },
];

const team = [
  {
    name: "Ravi Sharma",
    role: "Founder & Creative Director",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Priya Mehta",
    role: "Head of Event Design",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Arjun Kapoor",
    role: "Lead Decorator & Stylist",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15 },
  }),
};

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-[120px] px-6 md:px-20 max-w-[1440px] mx-auto">
      {/* Header */}
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass-panel rounded-full px-5 py-2 mb-6"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F2CA50]" style={{ fontFamily: "var(--font-inter)" }}>
            Our Story
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-playfair text-4xl md:text-5xl font-bold text-[#e5e2e1] mb-6"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          About{" "}
          <span className="gold-gradient-text italic">Prime Events</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-[#d0c5af] max-w-3xl mx-auto leading-relaxed"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Born from a passion for creating extraordinary moments, Prime Events has been
          the trusted partner for discerning clients who demand nothing but perfection.
          We are artists, strategists, and storytellers — weaving together vision and
          craftsmanship to create celebrations that linger in memory forever.
        </motion.p>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        {/* Image Collage */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative h-[500px]"
        >
          <div
            className="absolute top-0 left-0 w-3/4 h-3/4 rounded-2xl bg-cover bg-center border border-white/10 overflow-hidden"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80&auto=format&fit=crop')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
          </div>
          <div
            className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-2xl bg-cover bg-center border border-[#D4AF37]/20 overflow-hidden shadow-gold"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80&auto=format&fit=crop')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
          </div>
          {/* Gold accent badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-gold rounded-2xl p-5 text-center shadow-gold z-10">
            <div className="text-3xl font-bold gold-gradient-text" style={{ fontFamily: "var(--font-playfair)" }}>8+</div>
            <div className="text-xs text-[#d0c5af] uppercase tracking-widest mt-1" style={{ fontFamily: "var(--font-inter)" }}>Years of Excellence</div>
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="flex flex-col gap-8">
          {[
            {
              title: "Our Philosophy",
              body: "We believe every celebration is a once-in-a-lifetime masterpiece. Our meticulous attention to detail, combined with access to the finest vendors and materials, ensures your event exceeds every expectation.",
            },
            {
              title: "The Prime Promise",
              body: "From the first consultation to the final moment of your event, our dedicated team of artisans, florists, and planners work tirelessly to bring your unique vision to life with precision and artistry.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="glass-panel rounded-2xl p-8 glass-panel-hover transition-all duration-500"
            >
              <div className="gold-divider mb-0 mx-0 w-10 h-0.5 bg-[#D4AF37] mb-4" />
              <h3
                className="text-xl font-semibold text-[#e5e2e1] mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {item.title}
              </h3>
              <p className="text-[#d0c5af] leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="glass-panel rounded-2xl p-8 text-center glass-panel-hover transition-all duration-500 group"
          >
            <stat.icon className="w-7 h-7 text-[#D4AF37] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <div
              className="text-3xl font-bold gold-gradient-text mb-2"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {stat.num}
            </div>
            <div className="text-sm text-[#99907c] uppercase tracking-wider" style={{ fontFamily: "var(--font-inter)" }}>
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Team */}
      <div className="text-center mb-12">
        <h3
          className="font-playfair text-3xl font-bold text-[#e5e2e1] mb-3"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Meet the <span className="gold-gradient-text italic">Masters</span>
        </h3>
        <div className="gold-divider mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="group relative overflow-hidden rounded-2xl border border-white/8 hover:border-[#D4AF37]/30 transition-all duration-500"
          >
            <div
              className="h-72 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${member.img}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h4
                className="text-lg font-bold text-[#e5e2e1]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {member.name}
              </h4>
              <p className="text-sm text-[#F2CA50] uppercase tracking-wider mt-1" style={{ fontFamily: "var(--font-inter)" }}>
                {member.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
