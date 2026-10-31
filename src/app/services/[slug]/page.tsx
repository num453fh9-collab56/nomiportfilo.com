import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, CheckCircle2, Mail } from 'lucide-react';
import SiteNav from '@/components/site-nav';
import SiteFooter from '@/components/site-footer';
import ServiceIcon from '@/components/service-icon';
import { getService, services } from '@/lib/services';
import { contact } from '@/lib/site';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: 'Service not found' };
  }

  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | Numan Ali`,
      description: service.description,
      url: `/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const isPink = service.tone === 'pink';
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 4);

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

          <div className="mx-auto max-w-4xl">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <Link href="/services" className="rounded transition-colors hover:text-sky-600">
                Services
              </Link>
              <span aria-hidden="true">/</span>
              <span className="font-medium text-slate-700">{service.title}</span>
            </nav>

            <div className="mt-6 flex items-center gap-4">
              <span
                className={
                  isPink
                    ? 'flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-pink-600'
                    : 'flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-600'
                }
              >
                <ServiceIcon name={service.icon} size={26} />
              </span>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-sky-700">
                Service
              </p>
            </div>

            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tighter text-slate-900 sm:text-5xl md:text-6xl">
              {service.title}
            </h1>
            <p className="mt-3 text-lg font-medium text-slate-800 sm:text-xl">{service.tagline}</p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              {service.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-900 transition-colors hover:border-sky-400 hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <Mail size={18} strokeWidth={2} aria-hidden="true" />
                {contact.email}
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Kya include hai
              </h2>
              <ul className="mt-6 space-y-3">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                    <CheckCircle2
                      size={18}
                      strokeWidth={1.5}
                      className="mt-0.5 shrink-0 text-emerald-600"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.75rem] border border-sky-200 bg-gradient-to-br from-sky-50 to-pink-50 p-7">
              <h2 className="text-xl font-bold tracking-tight text-slate-900">
                Aap ko kya milega
              </h2>
              <ul className="mt-5 space-y-3">
                {service.outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                    <ArrowRight
                      size={16}
                      strokeWidth={2}
                      className="mt-0.5 shrink-0 text-sky-600"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-50/60 px-6 py-16 md:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Kaise kaam karte hain
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
              Simple, clear process — har step par aap ko pata hota hai kya ho raha hai.
            </p>

            <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <span className="text-xs font-bold tracking-[0.2em] text-sky-600">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 text-sm font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-sky-200 bg-gradient-to-r from-sky-50 to-pink-50 p-8 text-center md:p-12">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {service.title} ke liye baat karein
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Apne karobar ke liye hum se kaam karwaye — email par rabta karein, main jaldi reply
              karta hoon.
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

        <section className="px-6 pb-20 md:pb-28">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                Doosri services
              </h2>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 transition-colors hover:text-sky-800"
              >
                <ArrowLeft size={15} strokeWidth={2} aria-hidden="true" />
                Saari services dekhein
              </Link>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-100/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  <span
                    className={
                      item.tone === 'pink'
                        ? 'flex h-10 w-10 items-center justify-center rounded-xl bg-pink-100 text-pink-600'
                        : 'flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-600'
                    }
                  >
                    <ServiceIcon name={item.icon} size={18} />
                  </span>
                  <h3 className="mt-4 text-sm font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{item.short}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
