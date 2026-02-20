import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ark/Navbar";
import Footer from "@/components/ark/Footer";
import WhatsAppSticky from "@/components/ark/WhatsAppSticky";
import heroStudent from "@/assets/hero-student.jpg";

export default function PartnerWithArk() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", city: "", budget: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with real submit integration
    console.log("Franchise enquiry submitted", form);
    alert("Thank you — your enquiry has been received. We will contact you soon.");
    setForm({ name: "", phone: "", email: "", city: "", budget: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gradient-hero flex items-center py-24"
      >
          <div className="container-ark py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center text-white">
            <div>
              <h1 className="text-4xl md:text-5xl font-black mb-4">Partner With ARK Learning Arena</h1>
              <p className="text-white/75 mb-6 max-w-xl">
                Join us in expanding quality academic delivery across regions. Explore franchise opportunities, academic consulting, and strategic partnerships with ARK Learning Arena.
              </p>
              <div className="flex gap-4">
                <Button className="bg-ark-yellow text-ark-navy font-bold">Franchise Enquiry</Button>
                <Button className="border border-ark-navy text-ark-navy bg-white">Consulting Services</Button>
              </div>
            </div>

            <div>
              <img src={heroStudent} alt="Partner with ARK" className="rounded-2xl shadow-card-hover object-cover w-full max-h-80" />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-16"
      >
        <div className="container-ark">
          <h2 className="text-3xl text-white font-black mb-6">Why Partner With ARK</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-ark-navy-deep p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-2">Growth Opportunity</h3>
              <ul className="text-white/70 list-disc ml-5">
                <li>Scalable franchise model with proven demand</li>
                <li>Access to curriculum and marketing support</li>
                <li>High margin academic programs</li>
              </ul>
            </div>
            <div className="bg-ark-navy-deep p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-2">Brand Credibility</h3>
              <ul className="text-white/70 list-disc ml-5">
                <li>Established reputation in Chennai</li>
                <li>Documented outcomes and reporting</li>
                <li>Continuous faculty training</li>
              </ul>
            </div>
            <div className="bg-ark-navy-deep p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-2">Support Framework</h3>
              <ul className="text-white/70 list-disc ml-5">
                <li>Operational onboarding & training</li>
                <li>Marketing & student acquisition support</li>
                <li>Ongoing academic audits</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-16"
      >
        <div className="container-ark grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl text-white font-black mb-4">Franchise Model Details</h2>
            <div className="text-white/70 space-y-4">
              <p><strong>Investment Overview:</strong> Initial investment varies by city and location — includes setup, training, and initial marketing.</p>
              <p><strong>Support Provided:</strong> Curriculum, LMS access, marketing collateral, and regional launch support.</p>
              <p><strong>Training & Resources:</strong> Comprehensive trainer programs, onboarding manuals, and quarterly reviews.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl text-white font-black mb-4">Consulting Services</h2>
            <div className="text-white/70 space-y-4">
              <p>We offer academic consulting for schools and institutions: curriculum redesign, teacher training, assessment design, and performance analytics.</p>
              <p>Projects are scoped and priced based on deliverables and timeline.</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-16"
      >
        <div className="container-ark">
          <h2 className="text-3xl text-white font-black mb-6">Franchise Enquiry</h2>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 max-w-4xl">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className="p-3 rounded-lg bg-ark-navy-deep text-white/90" required />
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="p-3 rounded-lg bg-ark-navy-deep text-white/90" required />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="p-3 rounded-lg bg-ark-navy-deep text-white/90" required />
            <input name="city" value={form.city} onChange={handleChange} placeholder="City" className="p-3 rounded-lg bg-ark-navy-deep text-white/90" />
            <input name="budget" value={form.budget} onChange={handleChange} placeholder="Investment Budget (approx)" className="p-3 rounded-lg bg-ark-navy-deep text-white/90" />
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" className="p-3 rounded-lg bg-ark-navy-deep text-white/90 md:col-span-2" rows={5} />

            <div className="md:col-span-2 flex items-center gap-4">
              <Button type="submit" className="bg-ark-yellow text-ark-navy font-bold">Submit Enquiry</Button>
              <Button className="border border-ark-navy text-ark-navy bg-white" onClick={() => window.open('/partner-with-ark','_self')}>Learn More</Button>
            </div>
          </form>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-20 bg-ark-navy-deep"
      >
        <div className="container-ark text-center">
          <h2 className="text-3xl text-white font-black mb-4">Ready to Grow with ARK?</h2>
          <p className="text-white/75 mb-6">Partner with a proven academic system and expand into high-demand markets.</p>
          <Button className="bg-ark-yellow text-ark-navy font-bold px-8" onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}>
            Book Free Academic Assessment
          </Button>
        </div>
      </motion.section>

        {/* Footer + sticky */}
      </main>

      <Footer />
      <WhatsAppSticky />
    </div>
  );
}
