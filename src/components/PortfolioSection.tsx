"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

const categories = ["All", "Weddings", "Birthdays", "Baby Showers", "Corporate", "Themes", "Decor", "Traditional"];

const portfolioItems = [
  ...Array.from({ length: 4 }, (_, i) => ({ category: "Weddings", img: `/assets/wedding${i + 1}.jpeg` })),
  ...Array.from({ length: 7 }, (_, i) => ({ category: "Birthdays", img: `/assets/Birthday${i + 1}.jpeg` })),
  ...Array.from({ length: 6 }, (_, i) => ({ category: "Baby Showers", img: `/assets/Baby${i + 1}.jpeg` })),
  ...Array.from({ length: 3 }, (_, i) => ({ category: "Corporate", img: `/assets/corporate${i + 1}.png` })),
  ...Array.from({ length: 2 }, (_, i) => ({ category: "Themes", img: `/assets/theme${i + 1}.png` })),
  ...Array.from({ length: 3 }, (_, i) => ({ category: "Traditional", img: `/assets/Rangoli${i + 1}.jpeg` })),
  ...Array.from({ length: 11 }, (_, i) => ({ category: "Traditional", img: `/assets/saptpadi${i + 1}.jpeg` })),
  ...Array.from({ length: 12 }, (_, i) => ({ category: "Decor", img: `/assets/flower${i + 1}.jpeg` })),
].map((item, i) => ({
  id: i + 1,
  category: item.category,
  title: `Premium ${item.category} Showcase ${i + 1}`,
  subtitle: `Luxury Execution`,
  img: item.img,
  tall: i % 3 === 0,
}));

export default function PortfolioSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxItem, setLightboxItem] = useState<typeof portfolioItems[0] | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter((p) => p.category === activeCategory);

  const openLightbox = (item: typeof portfolioItems[0]) => {
    setLightboxItem(item);
    setLightboxIndex(filtered.indexOf(item));
  };

  const navigateLightbox = (dir: number) => {
    const newIndex = (lightboxIndex + dir + filtered.length) % filtered.length;
    setLightboxIndex(newIndex);
    setLightboxItem(filtered[newIndex]);
  };

  return (
    <section id="portfolio" ref={ref} className="py-[120px] bg-[#0e0e0e] relative overflow-hidden">
      <div className="px-6 md:px-20 max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 glass-panel rounded-full px-5 py-2 mb-5"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F2CA50]" style={{ fontFamily: "var(--font-inter)" }}>
                Our Work
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-playfair text-4xl md:text-5xl font-bold text-[#e5e2e1]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Masterpieces of{" "}
              <span className="gold-gradient-text italic">Celebration</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-[#d0c5af] mt-4 max-w-xl"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              A curated selection of our most exquisite and memorable event designs.
            </motion.p>
          </div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#D4AF37] text-[#0A0A0A]"
                    : "glass-panel text-[#d0c5af] hover:border-[#D4AF37]/40 hover:text-[#F2CA50]"
                }`}
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Masonry Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="break-inside-avoid relative group overflow-hidden rounded-2xl border border-white/8 hover:border-[#D4AF37]/25 cursor-pointer transition-all duration-500"
                style={{ height: item.tall ? "420px" : "280px" }}
                onClick={() => openLightbox(item)}
              >
                {/* Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${item.img}')` }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Zoom icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full glass-panel flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <ZoomIn className="w-4 h-4 text-[#F2CA50]" />
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F2CA50] block mb-1" style={{ fontFamily: "var(--font-inter)" }}>
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-[#e5e2e1]" style={{ fontFamily: "var(--font-playfair)" }}>
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#d0c5af] mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ fontFamily: "var(--font-inter)" }}>
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#0A0A0A]/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setLightboxItem(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxItem.img}
                alt={lightboxItem.title}
                className="w-full h-auto max-h-[75vh] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F2CA50]" style={{ fontFamily: "var(--font-inter)" }}>
                  {lightboxItem.category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1" style={{ fontFamily: "var(--font-playfair)" }}>
                  {lightboxItem.title}
                </h3>
                <p className="text-sm text-[#d0c5af] mt-1" style={{ fontFamily: "var(--font-inter)" }}>
                  {lightboxItem.subtitle}
                </p>
              </div>

              {/* Close */}
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white hover:text-[#F2CA50] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation */}
              <button
                onClick={() => navigateLightbox(-1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white hover:text-[#F2CA50] transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigateLightbox(1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white hover:text-[#F2CA50] transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
