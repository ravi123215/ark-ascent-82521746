import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const programs = [
  "NEET Coaching (Class 11–12)",
  "NEET Foundation (Class 8–10)",
  "NEET Repeaters Batch",
  "Tuition (Class 6–12)",
  "Board Exam Preparation",
  "ARK Nestlings",
];

export default function LeadFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", grade: "", program: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="lead-form" className="section-padding bg-white">
      <div className="container-ark">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: CTA Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-ark-yellow text-sm font-semibold tracking-widest uppercase bg-ark-yellow/10 px-4 py-2 rounded-full">
              Free Academic Assessment
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-ark-navy mt-6 mb-4">
              Start Your Child's
              <br />
              <span className="text-ark-yellow">Success Journey</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Book a free academic assessment today. Our experts will evaluate your child's current level, identify gaps, and create a personalised study strategy.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Diagnostic Test — Identify strengths & gaps",
                "Performance Breakdown — Subject-wise analysis",
                "Strategy Discussion — Personalized roadmap",
                "No obligation. Limited slots each week.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-ark-yellow flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-ark-navy text-xs font-black">✓</span>
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-ark-navy border-2 border-ark-navy px-5 py-3 rounded-xl font-semibold hover:bg-ark-navy hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="https://wa.me/919876543210"
                className="flex items-center gap-2 text-white bg-green-500 px-5 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-hero rounded-3xl p-8 shadow-card-hover">
              <h3 className="text-white text-2xl font-black mb-2">Book Free Assessment</h3>
              <p className="text-white/60 text-sm mb-6">Fill in your details and we'll call you within 24 hours.</p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-ark-yellow flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">✓</span>
                  </div>
                  <h4 className="text-white text-xl font-black mb-2">We'll Call You Soon!</h4>
                  <p className="text-white/70 text-sm">Our team will contact you within 24 hours to schedule your free assessment.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-white/80 text-sm font-medium mb-1.5 block">Student Name *</label>
                    <Input
                      required
                      placeholder="Enter student's name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-ark-yellow"
                    />
                  </div>
                  <div>
                    <label className="text-white/80 text-sm font-medium mb-1.5 block">Phone Number *</label>
                    <Input
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-ark-yellow"
                    />
                  </div>
                  <div>
                    <label className="text-white/80 text-sm font-medium mb-1.5 block">Current Grade *</label>
                    <Input
                      required
                      placeholder="e.g., Class 10 / Class 12"
                      value={form.grade}
                      onChange={(e) => setForm({ ...form, grade: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-ark-yellow"
                    />
                  </div>
                  <div>
                    <label className="text-white/80 text-sm font-medium mb-1.5 block">Program of Interest *</label>
                    <Select onValueChange={(v) => setForm({ ...form, program: v })} required>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-ark-yellow">
                        <SelectValue placeholder="Select a program" />
                      </SelectTrigger>
                      <SelectContent>
                        {programs.map((p) => (
                          <SelectItem key={p} value={p}>{p}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-ark-yellow text-ark-navy font-black hover:bg-ark-yellow-light shadow-yellow py-6 text-base mt-2"
                  >
                    Book My Free Assessment
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>

                  <p className="text-white/40 text-xs text-center">
                    No spam. 100% confidential. Limited slots available.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
