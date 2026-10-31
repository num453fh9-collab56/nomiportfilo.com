import type { Metadata } from 'next';
import Image from 'next/image';
import { ExternalLink, GitBranch, Mail } from 'lucide-react';
import SiteNav from '@/components/site-nav';
import SiteFooter from '@/components/site-footer';
import ContactForm from '@/components/contact-form';
import { contact } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Apne karobar ke liye hum se kaam karwaye — form bharein ya email karein, main jaldi reply karta hoon.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | Numan Ali',
    description:
      'Apne karobar ke liye hum se kaam karwaye — form bharein ya email karein, main jaldi reply karta hoon.',
    url: '/contact',
  },
};

const linkClass =
  'flex items-center gap-4 rounded-lg text-slate-600 transition-colors hover:text-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-pink-200 selection:text-slate-900">
      <SiteNav />

      <main id="top">
        <section className="relative isolate overflow-hidden bg-gradient-to-b from-sky-50 via-white to-pink-50 px-6 pb-14 pt-12 md:pb-16 md:pt-16">
          <div
            aria-hidden="true"
            className="absolute -top-32 left-1/4 -z-10 h-[360px] w-[460px] -translate-x-1/2 rounded-full bg-sky-200/50 blur-[120px]"
          />
          <div
            aria-hidden="true"
            className="absolute -top-24 right-0 -z-10 h-[300px] w-[380px] rounded-full bg-pink-200/50 blur-[120px]"
          />

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-sky-700">
              Instant Connection
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tighter text-slate-900 sm:text-5xl md:text-6xl">
              Seedha raabta karein.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600">
              Apne karobar ke liye hum se kaam karwaye — form bharein ya email karein, main jaldi
              reply karta hoon.
            </p>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 md:grid-cols-2">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <Image
                  src="/me.jpeg"
                  alt="Numan Ali"
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-full object-cover ring-2 ring-pink-300"
                />
                <div>
                  <p className="font-semibold text-slate-900">{contact.name}</p>
                  <p className="text-sm text-slate-600">AI Automation &amp; Full-Stack Developer</p>
                </div>
              </div>

              <p className="text-base font-light leading-relaxed text-slate-600">
                Koi project ya business goal mind mein hai? Batayein — automation, ads, ya web
                development, main aap ke liye sahi system design karta hoon.
              </p>

              <div className="space-y-4">
                <a href={`mailto:${contact.email}`} className={linkClass}>
                  <Mail size={20} strokeWidth={1.5} aria-hidden="true" />
                  <span className="text-sm font-medium">{contact.email}</span>
                </a>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  <GitBranch size={20} strokeWidth={1.5} aria-hidden="true" />
                  <span className="text-sm font-medium">github.com/num453fh9-collab56</span>
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  <ExternalLink size={20} strokeWidth={1.5} aria-hidden="true" />
                  <span className="text-sm font-medium">linkedin.com/in/nauman-ali</span>
                </a>
              </div>

              <div className="rounded-2xl border border-sky-200 bg-sky-50/60 p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sky-700">
                  Response time
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Aam tor par 24 ghanton ke andar reply karta hoon. Project ki details ke saath
                  message karein taake main seedha useful jawab de sakoon.
                </p>
              </div>
            </div>

            <div id="contact-form">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
