"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Anjali & Rohan Verma",
    event: "Wedding · Taj Lands End, Mumbai",
    rating: 5,
    text: "Prime Events transformed our wedding into a cinematic masterpiece. Every single detail was breathtaking — from the chandelier-lit mandap to the fairy-light reception canopy. Our guests are still talking about it six months later.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format&fit=crop",
  },
  {
    name: "Karan Malhotra",
    event: "Corporate Gala · Hyatt Regency, Delhi",
    rating: 5,
    text: "We hired Prime Events for our company's 25th anniversary gala — 400 guests, black-tie format. The execution was flawless. The stage design alone received a standing ovation. Worth every rupee and then some.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&auto=format&fit=crop",
  },
  {
    name: "Meera Kapoor",
    event: "Birthday · Private Villa, Goa",
    rating: 5,
    text: "I wanted a 30th birthday party that felt like a luxury resort experience — and Prime Events delivered exactly that. The flower walls, the cold pyro on the cake, the entire ambience was absolutely magical.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80&auto=format&fit=crop",
  },
  {
    name: "Priya & Amit Sharma",
    event: "Engagement · Oberoi Hotel, Bangalore",
    rating: 5,
    text: "From our very first call, the team understood exactly what we envisioned. The grand entry with the smoke tunnel, the rose-petal aisle, the lighting — it was like living inside a dream. Simply phenomenal.",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&q=80&auto=format&fit=crop",
  },
  {
    name: "Vikram Singh",
    event: "Baby Shower · Private Residence, Pune",
    rating: 5,
    text: "We were nervous about planning a large baby shower, but Prime Events made it completely stress-free. The pastel floral theme was beyond gorgeous and every little surprise they added made it perfect.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-[#F2CA50] fill-[#F2CA50]" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const visible = [
    testimonials[(current) % testimonials.length],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section id="testimonials" ref={ref} className="py-[120px] px-6 md:px-20 max-w-[1440px] mx-auto relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#D4AF37]/4 blur-[100px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass-panel rounded-full px-5 py-2 mb-6"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F2CA50]" style={{ fontFamily: "var(--font-inter)" }}>
            Client Stories
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-playfair text-4xl md:text-5xl font-bold text-[#e5e2e1] mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Words from Our{" "}
          <span className="gold-gradient-text italic">Clients</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-lg text-[#d0c5af] max-w-2xl mx-auto"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Hear from the couples, families and executives who trusted us with their most cherished moments.
        </motion.p>
      </div>

      {/* Featured Testimonial */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="glass-panel rounded-3xl p-10 md:p-14 mb-10 max-w-3xl mx-auto text-center relative border-[#D4AF37]/15"
        >
          {/* Quote icon */}
          <div className="absolute top-8 left-10 text-[#D4AF37]/20">
            <Quote className="w-16 h-16" />
          </div>

          <div className="relative z-10">
            <StarRating count={testimonials[current].rating} />

            <p
              className="text-xl md:text-2xl text-[#e5e2e1] leading-relaxed my-8 italic font-light"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              "{testimonials[current].text}"
            </p>

            <div className="flex items-center justify-center gap-4">
              <img
                src={testimonials[current].avatar}
                alt={testimonials[current].name}
                className="w-14 h-14 rounded-full object-cover border-2 border-[#D4AF37]/40"
              />
              <div className="text-left">
                <div className="font-semibold text-[#e5e2e1]" style={{ fontFamily: "var(--font-playfair)" }}>
                  {testimonials[current].name}
                </div>
                <div className="text-xs text-[#F2CA50] uppercase tracking-wider mt-0.5" style={{ fontFamily: "var(--font-inter)" }}>
                  {testimonials[current].event}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-6 mb-14">
        <button
          onClick={prev}
          className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-[#F2CA50] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-[#D4AF37]" : "w-1.5 bg-white/20 hover:bg-white/40"}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-[#F2CA50] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Mini Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {visible.map((t, i) => (
          <motion.div
            key={t.name + i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
            className="glass-panel rounded-2xl p-6 glass-panel-hover transition-all duration-500 cursor-pointer"
            onClick={() => setCurrent((current + i) % testimonials.length)}
          >
            <StarRating count={t.rating} />
            <p
              className="text-sm text-[#d0c5af] mt-4 leading-relaxed line-clamp-3 italic"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              "{t.text}"
            </p>
            <div className="flex items-center gap-3 mt-5 pt-4 border-t border-white/5">
              <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full object-cover border border-[#D4AF37]/30" />
              <div>
                <div className="text-sm font-semibold text-[#e5e2e1]" style={{ fontFamily: "var(--font-playfair)" }}>{t.name}</div>
                <div className="text-[10px] text-[#F2CA50] uppercase tracking-wider" style={{ fontFamily: "var(--font-inter)" }}>{t.event.split("·")[0]}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
