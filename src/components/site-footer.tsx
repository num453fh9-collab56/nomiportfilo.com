import { ExternalLink, GitBranch, Mail, MessageCircle } from 'lucide-react';
import { contact, whatsappDisplay, whatsappHref } from '@/lib/site';

const linkClass =
  'rounded transition-colors hover:text-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white';

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-sky-50/40 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="text-center md:text-left">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} {contact.name}. All rights reserved.
          </p>
          <div className="mt-2 flex flex-col items-center gap-1.5 text-sm text-slate-600 sm:flex-row sm:gap-5 md:items-start">
            <a href={`mailto:${contact.email}`} className={`flex items-center gap-2 ${linkClass}`}>
              <Mail size={15} strokeWidth={1.5} aria-hidden="true" />
              {contact.email}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 ${linkClass}`}
            >
              <MessageCircle size={15} strokeWidth={1.5} aria-hidden="true" />
              WhatsApp: {whatsappDisplay}
            </a>
          </div>
        </div>

        <div className="flex justify-center gap-5 text-slate-500">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className={linkClass}
          >
            <GitBranch size={20} strokeWidth={1.5} aria-hidden="true" />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className={linkClass}
          >
            <ExternalLink size={20} strokeWidth={1.5} aria-hidden="true" />
          </a>
          <a href={`mailto:${contact.email}`} aria-label="Send an email" className={linkClass}>
            <Mail size={20} strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
