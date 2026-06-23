"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from "lucide-react";

const WHATSAPP_NUMBER = "8010671447";
const PHONE_NUMBER = "+91 8010671447";
const EMAIL = "hello@primeevents.in";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
    date: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Compose WhatsApp message
    const msg = encodeURIComponent(
      `Hello Prime Events! 🎉\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nEvent Type: ${form.event}\nEvent Date: ${form.date}\n\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="py-[120px] px-6 md:px-20 bg-[#0e0e0e] relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D4AF37]/4 blur-[100px] rounded-full pointer-events-none" />

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
              Get In Touch
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-playfair text-4xl md:text-5xl font-bold text-[#e5e2e1] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Start Planning Your{" "}
            <span className="gold-gradient-text italic">Dream Event</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg text-[#d0c5af] max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Fill in the details below and our team will reach out within 24 hours to begin crafting your extraordinary celebration.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Contact Cards */}
            {[
              {
                icon: Phone,
                label: "Call Us Directly",
                value: PHONE_NUMBER,
                href: `tel:${PHONE_NUMBER.replace(/\s/g, "")}`,
                action: "Call Now",
              },
              {
                icon: MessageCircle,
                label: "WhatsApp Us",
                value: "Chat on WhatsApp",
                href: `https://wa.me/${WHATSAPP_NUMBER}`,
                action: "Open WhatsApp",
                green: true,
              },
              {
                icon: Mail,
                label: "Email Us",
                value: EMAIL,
                href: `mailto:${EMAIL}`,
                action: "Send Email",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="glass-panel rounded-2xl p-6 flex items-center gap-5 glass-panel-hover transition-all duration-500 group"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 ${item.green ? "bg-green-500/15 border border-green-500/30" : "glass-gold"}`}>
                    <Icon className={`w-5 h-5 ${item.green ? "text-green-400" : "text-[#F2CA50]"}`} />
                  </div>
                  <div>
                    <div className="text-xs text-[#99907c] uppercase tracking-widest mb-1" style={{ fontFamily: "var(--font-inter)" }}>
                      {item.label}
                    </div>
                    <div className="font-semibold text-[#e5e2e1] group-hover:text-[#F2CA50] transition-colors duration-300" style={{ fontFamily: "var(--font-playfair)" }}>
                      {item.value}
                    </div>
                  </div>
                  <div className="ml-auto text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs uppercase tracking-wider" style={{ fontFamily: "var(--font-inter)" }}>
                    {item.action} →
                  </div>
                </a>
              );
            })}

            {/* Location */}
            <div className="glass-panel rounded-2xl p-6 flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl glass-gold flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#F2CA50]" />
              </div>
              <div>
                <div className="text-xs text-[#99907c] uppercase tracking-widest mb-1" style={{ fontFamily: "var(--font-inter)" }}>
                  We Serve
                </div>
                <div className="text-[#e5e2e1] font-semibold mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                  Pan India · Destination Events
                </div>
                <div className="text-sm text-[#d0c5af]" style={{ fontFamily: "var(--font-inter)" }}>
                  Mumbai · Delhi · Goa · Bangalore · Jaipur & More
                </div>
              </div>
            </div>

            {/* Availability badge */}
            <div className="glass-gold rounded-2xl p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-green-400" style={{ fontFamily: "var(--font-inter)" }}>
                  Currently Taking Bookings
                </span>
              </div>
              <p className="text-sm text-[#d0c5af]" style={{ fontFamily: "var(--font-inter)" }}>
                Limited slots available for 2025 season. Book early to secure your date.
              </p>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-panel rounded-3xl p-16 text-center"
              >
                <div className="w-20 h-20 rounded-full glass-gold flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-[#F2CA50]" />
                </div>
                <h3 className="font-playfair text-3xl font-bold text-[#e5e2e1] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                  We'll Be In Touch!
                </h3>
                <p className="text-[#d0c5af] mb-8" style={{ fontFamily: "var(--font-inter)" }}>
                  Thank you for reaching out. Your enquiry has been sent to our WhatsApp. A member of our team will contact you within 24 hours.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-outline">
                  Send Another Enquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-panel rounded-3xl p-8 md:p-12">
                <h3 className="font-playfair text-2xl font-bold text-[#e5e2e1] mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
                  Tell us about your event
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-widest text-[#99907c] mb-2 block" style={{ fontFamily: "var(--font-inter)" }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="input-dark"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-widest text-[#99907c] mb-2 block" style={{ fontFamily: "var(--font-inter)" }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@email.com"
                      className="input-dark"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-widest text-[#99907c] mb-2 block" style={{ fontFamily: "var(--font-inter)" }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 98765 43210"
                      className="input-dark"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-widest text-[#99907c] mb-2 block" style={{ fontFamily: "var(--font-inter)" }}>
                      Event Type *
                    </label>
                    <select
                      name="event"
                      value={form.event}
                      onChange={handleChange}
                      required
                      className="input-dark"
                    >
                      <option value="" disabled>Select event type</option>
                      <option>Wedding Decoration</option>
                      <option>Birthday Decoration</option>
                      <option>Theme Decoration</option>
                      <option>Baby Shower</option>
                      <option>Flower Decoration</option>
                      <option>Corporate Event</option>
                      <option>Stage Decoration</option>
                      <option>Engagement Decoration</option>
                      <option>Anniversary Decoration</option>
                      <option>Grand Entry</option>
                      <option>Special Effects</option>
                      <option>Full Event Management</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="text-xs font-semibold uppercase tracking-widest text-[#99907c] mb-2 block" style={{ fontFamily: "var(--font-inter)" }}>
                    Event Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="input-dark"
                  />
                </div>

                <div className="mb-8">
                  <label className="text-xs font-semibold uppercase tracking-widest text-[#99907c] mb-2 block" style={{ fontFamily: "var(--font-inter)" }}>
                    Tell Us Your Vision
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Share your dream event details, theme, guest count, venue, budget — anything that helps us understand your vision..."
                    rows={4}
                    className="input-dark resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center gap-3">
                  <Send className="w-4 h-4" />
                  Send Enquiry via WhatsApp
                </button>

                <p className="text-xs text-[#99907c] text-center mt-4" style={{ fontFamily: "var(--font-inter)" }}>
                  By submitting, your details will be shared directly on WhatsApp with our events team.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
