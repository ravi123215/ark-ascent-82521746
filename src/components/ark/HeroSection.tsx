import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroStudent from "@/assets/hero-student.jpg";

const checks = [
  "Weekly Testing System",
  "Parent Transparency Reports",
  "Performance Analytics",
  "NCERT-Based Curriculum",
];

const ecosystemBadges = ["Nestlings", "Tuition", "Board Prep", "NEET Coaching", "Summer Camp"];

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
                Chennai's Structured Academic & Care Ecosystem
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
              From Nestlings to NEET — Structured Academic Growth at Every Stage.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-white/60 mb-4 max-w-lg leading-relaxed"
            >
              ARK Learning Arena is a structured academic performance system built to create measurable improvement — from Class 6 tuition to NEET qualification.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="text-white/50 text-sm italic mb-8 max-w-lg border-l-2 border-ark-yellow/40 pl-4"
            >
              At ARK Learning Arena, we operate a structured academic performance system designed to create disciplined, measurable improvement.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4 mb-4"
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
                className="border-ark-pink/40 text-white hover:bg-ark-pink/15 hover:border-ark-pink group px-8 text-base bg-transparent"
                onClick={() => document.getElementById("nestlings")?.scrollIntoView({ behavior: "smooth" })}
              >
                Enquire About After-School Care
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-white/50 text-sm mb-8"
            >
              Free diagnostic test. No obligation.
            </motion.p>

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

            {/* Ecosystem Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap gap-2 mt-6"
            >
              {ecosystemBadges.map((badge) => (
                <span
                  key={badge}
                  className="bg-white/10 border border-white/20 text-white/80 text-xs font-semibold px-3 py-1.5 rounded-full"
                >
                  {badge}
                </span>
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
