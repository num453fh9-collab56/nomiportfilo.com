import { MessageCircle } from 'lucide-react';
import { whatsappHref } from '@/lib/site';

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp par baat karein"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-4 text-[#052E16] shadow-2xl shadow-emerald-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1FBE5A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white print:hidden"
    >
      <MessageCircle size={22} strokeWidth={2} aria-hidden="true" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[10rem] group-focus-visible:max-w-[10rem] sm:inline">
        WhatsApp
      </span>
    </a>
  );
}
