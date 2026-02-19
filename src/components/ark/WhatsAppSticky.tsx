import { MessageCircle } from "lucide-react";

export default function WhatsAppSticky() {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-sticky w-14 h-14 bg-green-500 hover:bg-green-600 flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse-glow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
}
