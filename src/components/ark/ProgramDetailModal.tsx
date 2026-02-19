import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Clock, Users, BookOpen, Target, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ProgramDetail {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  ageGroup: string;
  duration: string;
  batchSize: string;
  highlights: string[];
  curriculum: { subject: string; topics: string[] }[];
  features: { icon: string; title: string; desc: string }[];
  outcomes: string[];
  color: string;
  accentColor: string;
}

const iconMap: Record<string, React.ElementType> = {
  CheckCircle, Clock, Users, BookOpen, Target, Award,
};

interface Props {
  program: ProgramDetail | null;
  onClose: () => void;
}

export default function ProgramDetailModal({ program, onClose }: Props) {
  if (!program) return null;

  return (
    <AnimatePresence>
      {program && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-x-4 top-[4%] bottom-[4%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-3xl z-50 flex flex-col bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className={`${program.color} p-6 md:p-8 relative`}>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${program.accentColor} mb-3 inline-block`}>
                {program.subtitle}
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-2">{program.title}</h2>
              <p className="text-white/80 text-sm md:text-base">{program.tagline}</p>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-4 mt-5">
                <div className="flex items-center gap-2 bg-white/15 rounded-xl px-3 py-2">
                  <Users className="w-4 h-4 text-white" />
                  <span className="text-white text-xs font-semibold">{program.ageGroup}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/15 rounded-xl px-3 py-2">
                  <Clock className="w-4 h-4 text-white" />
                  <span className="text-white text-xs font-semibold">{program.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/15 rounded-xl px-3 py-2">
                  <BookOpen className="w-4 h-4 text-white" />
                  <span className="text-white text-xs font-semibold">{program.batchSize}</span>
                </div>
              </div>
            </div>

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">

              {/* About */}
              <div>
                <h3 className="text-lg font-black text-ark-navy mb-3">About This Program</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{program.description}</p>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="text-lg font-black text-ark-navy mb-4">Program Highlights</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {program.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3 bg-muted/40 rounded-xl p-3">
                      <CheckCircle className="w-4 h-4 text-ark-yellow mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-ark-navy font-medium">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              {program.features.length > 0 && (
                <div>
                  <h3 className="text-lg font-black text-ark-navy mb-4">What Makes It Special</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {program.features.map((f, i) => (
                      <div key={i} className="border border-muted rounded-xl p-4">
                        <div className="w-9 h-9 rounded-lg bg-ark-navy flex items-center justify-center mb-3">
                          <Target className="w-4 h-4 text-white" />
                        </div>
                        <h4 className="font-bold text-ark-navy text-sm mb-1">{f.title}</h4>
                        <p className="text-muted-foreground text-xs">{f.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Curriculum */}
              {program.curriculum.length > 0 && (
                <div>
                  <h3 className="text-lg font-black text-ark-navy mb-4">Curriculum Overview</h3>
                  <div className="space-y-3">
                    {program.curriculum.map((c, i) => (
                      <div key={i} className="border-l-4 border-ark-yellow pl-4 py-1">
                        <div className="font-bold text-ark-navy text-sm mb-1">{c.subject}</div>
                        <div className="flex flex-wrap gap-2">
                          {c.topics.map((t, j) => (
                            <span key={j} className="text-xs bg-ark-yellow/10 text-ark-navy px-2 py-0.5 rounded-full">{t}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Outcomes */}
              <div>
                <h3 className="text-lg font-black text-ark-navy mb-4">Learning Outcomes</h3>
                <div className="space-y-2">
                  {program.outcomes.map((o, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <ArrowRight className="w-4 h-4 text-ark-pink mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{o}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="border-t border-muted p-5 flex flex-col sm:flex-row gap-3">
              <Button
                className="flex-1 bg-ark-yellow text-ark-navy font-bold shadow-yellow hover:bg-ark-yellow-light"
                onClick={() => {
                  onClose();
                  setTimeout(() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" }), 200);
                }}
              >
                Book Free Assessment
              </Button>
              <a
                href="https://wa.me/919876543210"
                className="flex-1 flex items-center justify-center gap-2 border-2 border-ark-navy text-ark-navy font-bold rounded-md py-2 text-sm hover:bg-ark-navy hover:text-white transition-colors"
              >
                Enquire on WhatsApp
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
