"use client";

import { Star } from "lucide-react";

// Social icons as custom inline SVGs
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0A0A0A" />
  </svg>
);
const TwitterXIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Wedding Decoration",
  "Birthday Decoration",
  "Corporate Events",
  "Stage Decoration",
  "Cold Pyro Effects",
  "Grand Entry Concepts",
];

const socials = [
  { Icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
  { Icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
  { Icon: YoutubeIcon, href: "https://youtube.com", label: "YouTube" },
  { Icon: TwitterXIcon, href: "https://twitter.com", label: "Twitter / X" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden">
      {/* Top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

      {/* Ambient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#D4AF37]/4 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-20 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F2CA50] to-[#C5A028] flex items-center justify-center flex-shrink-0">
                <Star className="w-4 h-4 text-[#0A0A0A] fill-[#0A0A0A]" />
              </div>
              <span
                className="font-playfair text-2xl font-bold tracking-tighter gold-gradient-text"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Prime Events
              </span>
            </div>

            <p className="text-sm text-[#d0c5af] leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
              Crafting extraordinary celebrations with unparalleled elegance since 2017. Your vision, our masterpiece.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full glass-panel flex items-center justify-center text-[#d0c5af] hover:text-[#F2CA50] hover:border-[#D4AF37]/30 transition-all duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>

            {/* WhatsApp mini CTA */}
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2.5 text-sm text-green-400 hover:bg-green-500/20 transition-colors duration-300 w-fit"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              WhatsApp: +91 99999 99999
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#e5e2e1] mb-6" style={{ fontFamily: "var(--font-inter)" }}>
              Explore
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#d0c5af] hover:text-[#F2CA50] transition-colors duration-300 flex items-center gap-2 group w-fit"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    <span className="w-3 h-px bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#e5e2e1] mb-6" style={{ fontFamily: "var(--font-inter)" }}>
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((svc) => (
                <li key={svc}>
                  <a
                    href="#services"
                    className="text-sm text-[#d0c5af] hover:text-[#F2CA50] transition-colors duration-300 flex items-center gap-2 group w-fit"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    <span className="w-3 h-px bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-4" />
                    {svc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#e5e2e1] mb-6" style={{ fontFamily: "var(--font-inter)" }}>
              Contact
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-[#d0c5af]" style={{ fontFamily: "var(--font-inter)" }}>
              <li>
                <span className="block text-[10px] text-[#99907c] uppercase tracking-wider mb-1">Phone</span>
                <a href="tel:+919999999999" className="hover:text-[#F2CA50] transition-colors">+91 99999 99999</a>
              </li>
              <li>
                <span className="block text-[10px] text-[#99907c] uppercase tracking-wider mb-1">Email</span>
                <a href="mailto:hello@primeevents.in" className="hover:text-[#F2CA50] transition-colors">hello@primeevents.in</a>
              </li>
              <li>
                <span className="block text-[10px] text-[#99907c] uppercase tracking-wider mb-1">Location</span>
                <span>Mumbai, India</span>
              </li>
              <li>
                <span className="block text-[10px] text-[#99907c] uppercase tracking-wider mb-1">Hours</span>
                <span>Mon–Sat: 9 AM – 8 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#99907c]" style={{ fontFamily: "var(--font-inter)" }}>
            © {new Date().getFullYear()} Prime Events. All rights reserved. Crafted for Extraordinary Celebrations.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cancellation Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-[#99907c] hover:text-[#F2CA50] transition-colors duration-300"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
