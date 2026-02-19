import { Phone, MessageCircle, MapPin, Mail, Instagram, Youtube, Facebook } from "lucide-react";

const footerLinks = {
  Programs: [
    "ARK Nestlings",
    "Tuition (Class 6–12)",
    "Board Exam Prep",
    "NEET Coaching",
    "NEET Foundation",
    "Repeaters Batch",
  ],
  Company: ["About ARK", "Our Results", "Faculty", "Franchise", "Blog", "Contact"],
  Support: ["Student Portal", "Parent Login", "Fee Structure", "Admission Form", "FAQ", "Privacy Policy"],
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-ark-navy-deep text-white">
      <div className="container-ark py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-ark-yellow flex items-center justify-center font-black text-ark-navy text-xl shadow-yellow">
                ARK
              </div>
              <div>
                <div className="text-white font-black text-lg">ARK Learning Arena</div>
                <div className="text-ark-yellow text-xs tracking-wider">WHERE DISCIPLINE MEETS DIRECTION</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Chennai's premier academic institution — building confident, disciplined, and result-oriented students through structured systems and expert mentorship.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              <a href="tel:+919876543210" className="flex items-center gap-3 text-white/70 hover:text-ark-yellow transition-colors text-sm">
                <Phone className="w-4 h-4 text-ark-yellow flex-shrink-0" />
                +91 98765 43210
              </a>
              <a href="mailto:info@tuitionwithark.com" className="flex items-center gap-3 text-white/70 hover:text-ark-yellow transition-colors text-sm">
                <Mail className="w-4 h-4 text-ark-yellow flex-shrink-0" />
                info@tuitionwithark.com
              </a>
              <div className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="w-4 h-4 text-ark-yellow flex-shrink-0 mt-0.5" />
                <span>ARK Learning Arena, Chennai, Tamil Nadu</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[
                { Icon: Instagram, href: "#" },
                { Icon: Youtube, href: "#" },
                { Icon: Facebook, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-ark-yellow hover:text-ark-navy flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-black text-sm mb-4 tracking-wider uppercase">{section}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/55 hover:text-ark-yellow text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* WhatsApp CTA banner */}
        <div className="mt-12 bg-green-600/20 border border-green-500/30 rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <MessageCircle className="w-8 h-8 text-green-400" />
            <div>
              <div className="text-white font-bold">Get Instant Help on WhatsApp</div>
              <div className="text-white/60 text-sm">Our counsellors reply within minutes</div>
            </div>
          </div>
          <a
            href="https://wa.me/919876543210"
            className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl transition-colors flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Chat Now
          </a>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} ARK Learning Arena. All rights reserved. | tuitionwithark.com
          </p>
          <div className="flex gap-4 text-white/40 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
