"use client";

import { useState, useEffect } from "react";
import { Menu, X, Star } from "lucide-react";

const navLinks = [
  { label: "SERVICES", href: "#services" },
  { label: "PORTFOLIO", href: "#portfolio" },
  { label: "ABOUT", href: "#about" },
  { label: "PROCESS", href: "#process" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple scroll spy logic
      const sections = navLinks.map((link) => link.href.substring(1));
      let current = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
      }
      
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
          scrolled ? "bg-[#0A0A0A]/80 backdrop-blur-md border-white/5 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <Star className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37] group-hover:rotate-180 transition-transform duration-700" />
            <span
              className="font-playfair text-xl md:text-2xl font-bold tracking-tighter gold-gradient-text"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Prime Events
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`text-xs font-semibold tracking-[0.15em] transition-colors relative py-2 ${
                      isActive ? "text-[#F2CA50]" : "text-[#e5e2e1] hover:text-[#D4AF37]"
                    }`}
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] rounded-t-sm" />
                    )}
                  </a>
                );
              })}
            </div>

            <a href="#contact" className="btn-primary py-2.5 px-6 text-sm">
              BOOK EVENT
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-[#e5e2e1]"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-[#0A0A0A]/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute top-0 right-0 w-[80%] max-w-[300px] h-full bg-[#0e0e0e] border-l border-white/5 shadow-2xl flex flex-col p-8">
            <button
              className="self-end text-[#e5e2e1] mb-10"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold tracking-[0.15em] text-[#e5e2e1] hover:text-[#D4AF37]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {link.label}
                </a>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary w-full justify-center text-sm py-3"
              >
                BOOK EVENT
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
