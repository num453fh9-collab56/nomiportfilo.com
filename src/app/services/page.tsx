import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';
import SiteNav from '@/components/site-nav';
import SiteFooter from '@/components/site-footer';
import ServiceIcon from '@/components/service-icon';
import { services } from '@/lib/services';
import { contact } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Frontend aur backend development, websites, custom AI agents, auto chat, email aur WhatsApp automation, aur Meta Ads — apne karobar ke liye hum se kaam karwaye.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-pink-200 selection:text-slate-900">
      <SiteNav />

      <main id="top">
        <section className="relative isolate overflow-hidden bg-gradient-to-b from-sky-50 via-white to-pink-50 px-6 pb-16 pt-14 md:pb-20 md:pt-20">
          <div
            aria-hidden="true"
            className="absolute -top-32 left-1/4 -z-10 h-[360px] w-[460px] -translate-x-1/2 rounded-full bg-sky-200/50 blur-[120px]"
          />
          <div
            aria-hidden="true"
            className="absolute -top-24 right-0 -z-10 h-[300px] w-[380px] rounded-full bg-pink-200/50 blur-[120px]"
          />

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-sky-700">Our Services</p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tighter text-slate-900 sm:text-5xl md:text-6xl">
              Har service jo aap ke karobar ko{' '}
              <span className="bg-gradient-to-r from-sky-600 to-pink-500 bg-clip-text text-transparent">
                aage barhaye.
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Frontend aur backend development se lekar custom AI agents, auto chat, email aur
              WhatsApp automation, aur Meta Ads tak — poora digital system ek hi jagah se.
            </p>
          </div>
        </section>

        <section className="px-6 pb-20 md:pb-28">
          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const isPink = service.tone === 'pink';
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex flex-col rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-100/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  <span
                    className={
                      isPink
                        ? 'flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 text-pink-600'
                        : 'flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600'
                    }
                  >
                    <ServiceIcon name={service.icon} size={22} />
                  </span>
                  <h2 className="mt-5 text-lg font-bold text-slate-900">{service.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.short}</p>
                  <ul className="mt-4 space-y-1.5 text-xs text-slate-500">
                    {service.includes.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sky-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-sky-700">
                    Poori tafseel dekhein
                    <ArrowRight
                      size={14}
                      strokeWidth={2}
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="border-t border-slate-200 px-6 py-16 md:py-20">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-sky-200 bg-gradient-to-r from-sky-50 to-pink-50 p-8 text-center md:p-12">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Apne karobar ke liye hum se kaam karwaye.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Batayein aap ko kya chahiye — main sahi service aur system suggest karta hoon. Pehla
              step sirf ek message hai.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`mailto:${contact.email}`}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-900 transition-colors hover:border-sky-400 hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-50 sm:w-auto"
              >
                <Mail size={18} strokeWidth={2} aria-hidden="true" />
                {contact.email}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
