"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "919999999999";
const PHONE_NUMBER = "+919999999999";

export default function WhatsAppFAB() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[80] flex flex-col items-end gap-3">
      {/* Expanded menu */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-3 items-end"
          >
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Prime Events! I'd like to enquire about your event services. 🎉")}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 glass-panel rounded-full px-5 py-3 hover:border-green-500/40 transition-all duration-300 group"
            >
              <span className="text-sm font-semibold text-[#e5e2e1] group-hover:text-green-400 transition-colors" style={{ fontFamily: "var(--font-inter)" }}>
                Chat on WhatsApp
              </span>
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-4 h-4 text-white fill-white" />
              </div>
            </a>

            {/* Call */}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-3 glass-panel rounded-full px-5 py-3 hover:border-[#D4AF37]/40 transition-all duration-300 group"
            >
              <span className="text-sm font-semibold text-[#e5e2e1] group-hover:text-[#F2CA50] transition-colors" style={{ fontFamily: "var(--font-inter)" }}>
                Call Us Now
              </span>
              <div className="w-8 h-8 rounded-full glass-gold flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 text-[#F2CA50]" />
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => setExpanded((e) => !e)}
        className={`relative w-14 h-14 rounded-full flex items-center justify-center shadow-gold transition-all duration-300 ${
          expanded ? "bg-[#1F1F1F] border border-white/10" : "bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
        }`}
        aria-label="Contact options"
      >
        <AnimatePresence mode="wait">
          {expanded ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X className="w-6 h-6 text-[#e5e2e1]" />
            </motion.span>
          ) : (
            <motion.span key="wa" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageCircle className="w-6 h-6 text-white fill-white" />
            </motion.span>
          )}
        </AnimatePresence>

        {/* Ping animation */}
        {!expanded && (
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
        )}
      </motion.button>
    </div>
  );
}
