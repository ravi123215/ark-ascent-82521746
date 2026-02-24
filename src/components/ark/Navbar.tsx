import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import arkLogo from "@/assets/ark-logo.jpeg";

const programs = [
  { label: "ARK Nestlings", href: "#programs" },
  { label: "Tuition (Class 6–12)", href: "#programs" },
  { label: "Board Exam Prep", href: "#programs" },
  { label: "NEET Coaching", href: "#programs" },
  { label: "NEET Foundation (8–10)", href: "#programs" },
  { label: "Repeaters Batch", href: "#programs" },
];

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Programs", href: "#programs", hasDropdown: true },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-ark-navy shadow-nav py-2"
            : "bg-ark-navy/95 backdrop-blur-sm py-4"
        }`}
      >
        <div className="container-ark flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img
              src={arkLogo}
              alt="ARK Learning Arena Logo"
              className="w-12 h-12 rounded-xl object-cover shadow-yellow"
            />
            <div>
              <div className="text-white font-bold text-lg leading-tight">ARK Learning Arena</div>
              <div className="text-ark-yellow text-xs font-medium tracking-wider">DISCIPLINE MEETS DIRECTION</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setProgramsOpen(true)}
                  onMouseLeave={() => setProgramsOpen(false)}
                >
                  <button className="flex items-center gap-1 text-white/90 hover:text-ark-yellow font-medium text-sm transition-colors">
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${programsOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {programsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-card-hover overflow-hidden"
                      >
                        {programs.map((p) => (
                          <a
                            key={p.label}
                            href={p.href}
                            className="block px-4 py-3 text-sm text-ark-navy hover:bg-ark-navy hover:text-white transition-colors font-medium border-b border-muted last:border-0"
                          >
                            {p.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/90 hover:text-ark-yellow font-medium text-sm transition-colors link-underline"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+917639399217"
              className="flex items-center gap-2 text-white/80 hover:text-ark-yellow text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+91 76393 99217</span>
            </a>
            <a
              href="https://ark-learning-hub.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 px-4 rounded-md border border-ark-yellow text-ark-yellow font-bold text-sm hover:bg-ark-yellow hover:text-ark-navy transition-colors"
            >
              Partner With ARK
            </a>
            <Button
              className="bg-ark-yellow text-ark-navy font-bold hover:bg-ark-yellow-light shadow-yellow px-5"
              onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book Assessment
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-ark-navy-deep border-t border-white/10 overflow-hidden"
            >
              <div className="container-ark py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-3 px-4 text-white/90 hover:text-ark-yellow hover:bg-white/5 rounded-lg font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                {programs.map((p) => (
                  <a
                    key={p.label}
                    href={p.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-2 px-8 text-white/60 hover:text-ark-yellow text-sm transition-colors"
                  >
                    → {p.label}
                  </a>
                ))}
                <div className="pt-4 flex flex-col gap-3">
                  <Button
                    className="bg-ark-yellow text-ark-navy font-bold w-full shadow-yellow"
                    onClick={() => {
                      setMobileOpen(false);
                      document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Book Free Assessment
                  </Button>
                  <a
                    href="https://wa.me/917639399217?text=Hi%2C%20I%20found%20ARK%20Learning%20Arena%20online.%20I%27d%20like%20to%20know%20more%20about%20your%20programs."
                    className="flex items-center justify-center gap-2 py-3 rounded-xl border border-green-400 text-green-400 font-medium"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile sticky bottom CTA */}
      <div className="mobile-cta-sticky lg:hidden bg-ark-navy border-t border-white/10 flex">
        <a
          href="tel:+917639399217"
          className="flex-1 flex items-center justify-center gap-2 py-4 text-white font-semibold text-sm border-r border-white/10"
        >
          <Phone className="w-5 h-5 text-ark-yellow" />
          Call Now
        </a>
        <button
          onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-ark-yellow text-ark-navy font-bold text-sm"
        >
          Book Assessment
        </button>
      </div>
    </>
  );
}
