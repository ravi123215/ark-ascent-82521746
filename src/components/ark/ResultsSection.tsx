import { motion } from "framer-motion";
import { Trophy, Medal, Star, ArrowRight } from "lucide-react";

const results = [
  {
    student: "Priya S.",
    score: "680/720",
    program: "NEET 2024",
    achievement: "Government Medical Seat",
    icon: Trophy,
    rank: "AIR 4,821",
  },
  {
    student: "Arjun K.",
    score: "672/720",
    program: "NEET 2024",
    achievement: "Government Medical Seat",
    icon: Trophy,
    rank: "AIR 6,102",
  },
  {
    student: "Divya R.",
    score: "665/720",
    program: "NEET 2024",
    achievement: "Government Medical Seat",
    icon: Trophy,
    rank: "AIR 7,834",
  },
  {
    student: "Karthik M.",
    score: "98%",
    program: "Board 2024",
    achievement: "State Distinction",
    icon: Medal,
    rank: "Class 12",
  },
  {
    student: "Sneha P.",
    score: "97%",
    program: "Board 2024",
    achievement: "School Topper",
    icon: Medal,
    rank: "Class 10",
  },
  {
    student: "Rahul V.",
    score: "96%",
    program: "Board 2024",
    achievement: "Board Excellence",
    icon: Star,
    rank: "Class 12",
  },
];

export default function ResultsSection() {
  return (
    <section id="results" className="section-padding bg-gradient-results relative overflow-hidden">
      {/* Background decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-ark-yellow/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-ark-pink/5 blur-3xl" />
      </div>

      <div className="container-ark relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-ark-yellow text-sm font-semibold tracking-widest uppercase bg-ark-yellow/15 px-4 py-2 rounded-full">
            Proven Results
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-6 mb-4">
            Our Students{" "}
            <span className="text-ark-yellow">Achieve</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Real results from real students. ARK's structured system consistently produces top performers in NEET and Board examinations.
          </p>

          {/* Summary stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {[
              { val: "80%", label: "NEET Qualification" },
              { val: "3", label: "Govt. Medical Seats" },
              { val: "95%+", label: "Board Distinctions" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-black text-ark-yellow">{s.val}</div>
                <div className="text-white/60 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {results.map((result, i) => (
            <motion.div
              key={result.student}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 text-white hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-ark-yellow flex items-center justify-center">
                  <result.icon className="w-5 h-5 text-ark-navy" />
                </div>
                <span className="text-ark-yellow text-xs font-bold bg-ark-yellow/15 px-3 py-1 rounded-full">
                  {result.rank}
                </span>
              </div>
              <div className="text-3xl font-black text-ark-yellow mb-1">{result.score}</div>
              <div className="font-bold text-white text-lg">{result.student}</div>
              <div className="text-white/60 text-sm">{result.program}</div>
              <div className="mt-3 text-xs font-semibold text-ark-pink bg-ark-pink/15 px-3 py-1 rounded-full inline-block">
                {result.achievement}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="text-center mt-12"
        >
          <button className="flex items-center gap-2 mx-auto text-ark-yellow border border-ark-yellow/50 px-6 py-3 rounded-xl hover:bg-ark-yellow/10 transition-colors font-semibold">
            View All Results
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
