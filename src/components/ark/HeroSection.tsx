import { motion } from "framer-motion";
import { ArrowRight, Download, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroStudent from "@/assets/founder.jpg";

const checks = [
  "Weekly Testing System",
  "Parent Transparency Reports",
  "Performance Analytics",
  "NCERT-Based NEET Coaching",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden flex items-center pt-20">
      {/* Background decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-ark-yellow/8 blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-ark-pink/8 blur-3xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(hsl(0 0% 100% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container-ark relative z-10 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-ark-yellow/15 border border-ark-yellow/30 rounded-full px-4 py-2 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-ark-yellow animate-pulse-glow" />
              <span className="text-ark-yellow text-sm font-semibold tracking-wide">
                Chennai's Premier Academic Institution
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl xl:text-6xl font-black leading-tight mb-6"
            >
              Where{" "}
              <span className="text-ark-yellow">Discipline</span>
              <br />
              Meets{" "}
              <span className="text-ark-pink">Direction.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-white/75 mb-4 font-medium"
            >
              From Nestlings to NEET – Structured Academic Growth
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-white/60 mb-4 max-w-lg leading-relaxed"
            >
              At ARK Learning Arena, we operate a disciplined academic performance system designed to create measurable improvement at every stage.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="text-white/60 mb-8 max-w-lg leading-relaxed"
            >
              We build confident, capable, and future-ready students through disciplined systems, expert faculty, and measurable results — from Class 6 to NEET qualification.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Button
                size="lg"
                className="bg-ark-yellow text-ark-navy font-bold hover:bg-ark-yellow-light shadow-yellow group px-8 text-base"
                onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book Free Academic Assessment
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white group px-8 text-base bg-transparent"
              >
                <Download className="mr-2 w-5 h-5" />
                Download Academic Planner
              </Button>
            </motion.div>

            <motion.div className="mb-6">
              <div className="text-sm text-white/70">Free diagnostic assessment. No obligation.</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="grid grid-cols-2 gap-3"
            >
              {checks.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-ark-yellow flex-shrink-0" />
                  <span className="text-white/80 text-sm font-medium">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-ark-yellow/20 blur-2xl scale-105" />
              <img
                src={heroStudent}
                alt="ARK student excelling in studies"
                className="relative w-full max-w-md lg:max-w-lg rounded-3xl object-cover animate-float"
                style={{ maxHeight: "520px" }}
              />
              {/* Removed floating 80% stat from hero to reduce competition with main message.
                  Stat remains in TrustStrip below for better hierarchy. */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.4 }}
                className="absolute top-4 right-4 bg-ark-yellow rounded-2xl px-4 py-3 shadow-yellow text-right"
              >
                <div className="text-2xl font-black text-ark-navy">3</div>
                <div className="text-xs text-ark-navy font-semibold">Govt. Seats</div>
                <div className="text-xxs text-ark-navy/80 mt-1">Last Academic Year</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
