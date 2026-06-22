"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ChevronDown } from "lucide-react";
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80&auto=format&fit=crop";
const floatingParticles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 4,
}));
export default function HeroSection() {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const subRef = useRef<HTMLParagraphElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
            tl.fromTo(
                overlayRef.current,
                { opacity: 1 },
                { opacity: 0.65, duration: 2 }
            )
                .fromTo(
                    badgeRef.current,
                    { opacity: 0, y: 30, scale: 0.9 },
                    { opacity: 1, y: 0, scale: 1, duration: 0.8 },
                    "-=1"
                )
                .fromTo(
                    headingRef.current,
                    { opacity: 0, y: 60 },
                    { opacity: 1, y: 0, duration: 1.1 },
                    "-=0.5"
                )
                .fromTo(
                    subRef.current,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.9 },
                    "-=0.7"
                )
                .fromTo(
                    ctaRef.current,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.8 },
                    "-=0.6"
                );
        });
        return () => ctx.revert();
    }, []);
    return (
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden noise-overlay">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center scale-105"
                style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
            />
            {/* Gradient Overlays */}
            <div ref={overlayRef} className="absolute inset-0 bg-[#0A0A0A]/60 z-[1]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/30 via-transparent to-[#0A0A0A] z-[2]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]/20 z-[2]" />
            {/* Floating Gold Particles */}
            <div className="absolute inset-0 z-[3] pointer-events-none overflow-hidden">
                {floatingParticles.map((p) => (
                    <div
                        key={p.id}
                        className="absolute rounded-full bg-[#D4AF37]"
                        style={{
                            width: p.size,
                            height: p.size,
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                            opacity: 0.3,
                            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
                        }}
                    />
                ))}
            </div>
            {/* Radial Gold Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#D4AF37]/8 blur-[120px] rounded-full z-[3] pointer-events-none" />
            {/* Content */}
            <div className="relative z-[4] text-center px-6 md:px-20 max-w-5xl mx-auto flex flex-col items-center gap-8">
                {/* Badge */}
                <div ref={badgeRef} style={{ opacity: 0 }}>
                    <div className="inline-flex items-center gap-2 glass-panel border-[#D4AF37]/30 rounded-full px-6 py-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F2CA50] animate-pulse" />
                        <span
                            className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F2CA50]"
                            style={{ fontFamily: "var(--font-inter)" }}
                        >
                            The Pinnacle of Event Design
                        </span>
                    </div>
                </div>
                {/* Heading */}
                <h1
                    ref={headingRef}
                    className="font-playfair text-5xl md:text-7xl lg:text-[80px] font-bold leading-tight tracking-tight text-[#e5e2e1]"
                    style={{ opacity: 0, fontFamily: "var(--font-playfair)" }}
                >
                    Crafting{" "}
                    <span className="block md:inline">
                        Extraordinary
                    </span>
                    <br />
                    <span className="gold-gradient-text italic font-light">
                        Celebrations
                    </span>
                </h1>
                {/* Subtitle */}
                <p
                    ref={subRef}
                    className="text-lg md:text-xl text-[#d0c5af] max-w-2xl leading-relaxed"
                    style={{ opacity: 0, fontFamily: "var(--font-inter)" }}
                >
                    Where luxury meets perfection in every detail. We transform your vision
                    into unforgettable experiences, orchestrating every moment with
                    unparalleled elegance.
                </p>
                {/* CTAs */}
                <div
                    ref={ctaRef}
                    className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto"
                    style={{ opacity: 0 }}
                >
                    <a href="#contact" className="btn-primary">
                        Book Your Event
                    </a>
                    <a href="#portfolio" className="btn-outline">
                        View Portfolio
                    </a>
                </div>
                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 0.8 }}
                    className="flex items-center gap-8 md:gap-16 mt-4 pt-8 border-t border-white/8 w-full justify-center"
                >
                    {[
                        { num: "500+", label: "Events Completed" },
                        { num: "8+", label: "Years Experience" },
                        { num: "100%", label: "Client Satisfaction" },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div
                                className="text-2xl md:text-3xl font-bold gold-gradient-text"
                                style={{ fontFamily: "var(--font-playfair)" }}
                            >
                                {stat.num}
                            </div>
                            <div
                                className="text-xs text-[#99907c] uppercase tracking-widest mt-1"
                                style={{ fontFamily: "var(--font-inter)" }}
                            >
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[4] flex flex-col items-center gap-2"
            >
                <span
                    className="text-xs uppercase tracking-[0.2em] text-[#99907c]"
                    style={{ fontFamily: "var(--font-inter)" }}
                >
                    Scroll
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-5 h-5 text-[#D4AF37]" />
                </motion.div>
            </motion.div>
        </section>
    );
}
