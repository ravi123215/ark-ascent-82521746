import Navbar from "@/components/ark/Navbar";
import HeroSection from "@/components/ark/HeroSection";
import TrustStrip from "@/components/ark/TrustStrip";
import ProgramsSection from "@/components/ark/ProgramsSection";
import WhyARKSection from "@/components/ark/WhyARKSection";
import ResultsSection from "@/components/ark/ResultsSection";
import TestimonialsSection from "@/components/ark/TestimonialsSection";
import LeadFormSection from "@/components/ark/LeadFormSection";
import FounderSection from "@/components/ark/FounderSection";
import FAQSection from "@/components/ark/FAQSection";
import FinalCTASection from "@/components/ark/FinalCTASection";
import Footer from "@/components/ark/Footer";
import WhatsAppSticky from "@/components/ark/WhatsAppSticky";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <TrustStrip />
        <ProgramsSection />
        <WhyARKSection />
        <ResultsSection />
        <TestimonialsSection />
        <LeadFormSection />
        <FounderSection />
        <FAQSection />
        <FinalCTASection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky WhatsApp Button */}
      <WhatsAppSticky />
    </div>
  );
};

export default Index;
