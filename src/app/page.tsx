import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChevronDown,
  Code2,
  ExternalLink,
  GitBranch,
  GraduationCap,
  Mail,
  Megaphone,
  Sparkles,
  TrendingUp,
  Zap,
} from 'lucide-react';
import SiteNav from '@/components/site-nav';
import SiteFooter from '@/components/site-footer';
import HeroBackdrop from '@/components/hero-backdrop';
import AutomationFlow from '@/components/automation-flow';
import ContactForm from '@/components/contact-form';
import ServiceIcon from '@/components/service-icon';
import { services } from '@/lib/services';
import { projects } from '@/lib/projects';
import { faqs } from '@/lib/faqs';
import { contact } from '@/lib/site';

const techStack = ['Next.js', 'React', 'JavaScript', 'Python', 'REST APIs', 'Git'];

const serviceBullets = {
  meta: ['Targeted audience', 'Lower cost per lead', 'Real-time tracking'],
  email: ['Automatic follow-up', '24/7 sending', 'More conversions'],
};

const processSteps = [
  {
    title: 'Discovery',
    text: 'Aap ke goals, business aur requirements ko samajhna — pehla aur sab se zaroori step.',
  },
  {
    title: 'Plan & scope',
    text: 'Features, timeline aur deliverables clear kiye jate hain, taake sab kuch predictable rahe.',
  },
  {
    title: 'Build',
    text: 'Design aur development ke saath regular updates — aap ko pata rehta hai kaam kahan tak hai.',
  },
  {
    title: 'Launch & support',
    text: 'Testing, deploy aur launch ke baad support — system stable aur usable rehta hai.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-pink-200 selection:text-slate-900">
      <SiteNav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <main id="top">
        {/* ========== HERO ========== */}
        <section className="relative isolate overflow-hidden bg-gradient-to-b from-sky-50 via-white to-pink-50 px-6 pb-16 pt-16 md:pt-24">
          <HeroBackdrop />
          <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10 opacity-70" />
          <div
            aria-hidden="true"
            className="absolute -top-40 left-1/4 -z-10 h-[420px] w-[520px] -translate-x-1/2 rounded-full bg-sky-200/50 blur-[120px]"
          />
          <div
            aria-hidden="true"
            className="absolute -top-32 right-0 -z-10 h-[360px] w-[420px] rounded-full bg-pink-200/50 blur-[120px]"
          />

          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-sky-700 shadow-sm sm:text-xs">
                <Zap size={14} strokeWidth={2} aria-hidden="true" />
                Web Development · AI Agents · Meta Ads
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tighter text-slate-900 sm:text-5xl md:text-6xl xl:text-7xl">
                Automation ke Results,
                <br />
                <span className="bg-gradient-to-r from-sky-600 to-pink-500 bg-clip-text text-transparent">
                  Har Screen Par.
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-slate-600 sm:text-lg lg:mx-0">
                Frontend, backend aur websites se lekar custom AI agents tak — auto chat, email aur
                WhatsApp automation, aur Meta Ads. Aap ke karobar ka poora digital system, ek hi
                jagah se.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <a
                  href="#contact"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-2xl hover:shadow-sky-200/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-auto"
                >
                  Contact karein
                  <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
                </a>
                <a
                  href="#portfolio"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-900 transition-colors hover:border-sky-400 hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-auto"
                >
                  Sample Dekhain
                  <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
                </a>
              </div>

              <div className="mx-auto mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-slate-200 pt-6 lg:mx-0">
                {[
                  ['8+', 'Core services'],
                  ['24/7', 'Agents on duty'],
                  ['Real-time', 'Result visibility'],
                ].map(([value, label]) => (
                  <div key={label}>
                    <p className="text-lg font-bold text-slate-900 sm:text-xl">{value}</p>
                    <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-slate-500 sm:text-[11px]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-6xl">
            <AutomationFlow />
          </div>
        </section>

        {/* ========== INTEGRATED SOLUTIONS ========== */}
        <section id="solutions" className="border-t border-slate-200 px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-sky-700">
                Our Services
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                Frontend se AI agents tak — poora system.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Websites, custom AI agents, auto chat, email aur WhatsApp automation, aur Meta Ads —
                apne karobar ke liye hum se kaam karwaye.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => {
                const isPink = service.tone === 'pink';
                return (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-100/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    <span
                      className={
                        isPink
                          ? 'flex h-11 w-11 items-center justify-center rounded-2xl bg-pink-100 text-pink-600'
                          : 'flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-600'
                      }
                    >
                      <ServiceIcon name={service.icon} />
                    </span>
                    <h3 className="mt-5 text-base font-bold text-slate-900">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.short}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-sky-700 opacity-0 transition-opacity group-hover:opacity-100">
                      Details dekhein
                      <ArrowRight size={13} strokeWidth={2} aria-hidden="true" />
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-[1.75rem] border border-sky-200 bg-gradient-to-r from-sky-50 to-pink-50 p-6 sm:flex-row sm:p-8">
              <div className="text-center sm:text-left">
                <p className="text-lg font-bold text-slate-900 sm:text-xl">
                  Apne karobar ke liye hum se kaam karwaye.
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Frontend, backend, AI agents ya Meta Ads — pehla step sirf ek message hai.
                </p>
              </div>
              <a
                href="#contact"
                className="flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-900 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-50 sm:w-auto"
              >
                Contact karein
                <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* ========== SERVICES ========== */}
        <section
          id="services"
          className="border-t border-slate-200 bg-gradient-to-b from-sky-50/60 to-white px-6 py-20 md:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-sky-700">
                Automation Deep Dive
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                Seedha business results.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Technical labels ki jagah woh results jo aap ke business ke liye matter karte hain.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Meta Ads */}
              <article className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition-all hover:border-sky-300 hover:shadow-xl hover:shadow-sky-100/60 sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                    <Megaphone size={22} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                    Meta Ads
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  ZAYADA CUSTOMERS TAK POHONCHAIN
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Sahi audience ko sahi waqt par aap ka ad dikhe — waste na ho, sirf real customers
                  tak pohnche.
                </p>

                <div className="mt-7 rounded-2xl border border-slate-200 bg-sky-50/50 p-5">
                  <div className="flex items-end justify-between gap-5">
                    <div className="flex flex-1 items-end gap-1.5" aria-hidden="true">
                      {[30, 42, 38, 56, 52, 72, 88].map((height, index) => (
                        <span
                          key={index}
                          style={{ height: `${height * 0.7}px` }}
                          className="w-full rounded-sm bg-gradient-to-t from-sky-200 to-sky-500"
                        />
                      ))}
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                        Reach
                      </p>
                      <p className="mt-1 flex items-center justify-end gap-1 text-sm font-bold text-emerald-700">
                        <TrendingUp size={15} strokeWidth={2} aria-hidden="true" />
                        Barh rahi hai
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-2.5">
                  {serviceBullets.meta.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <CheckCircle2
                        size={16}
                        strokeWidth={1.5}
                        className="shrink-0 text-emerald-600"
                        aria-hidden="true"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>

              {/* Email Automation */}
              <article className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition-all hover:border-pink-300 hover:shadow-xl hover:shadow-pink-100/60 sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 text-pink-600">
                    <Mail size={22} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                    Email Automation
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  SALES BARAHAIN
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Automated email sequences jo leads ko customers mein badal dein — follow-up ka
                  intezar nahi, sab kuch foran.
                </p>

                <div className="mt-7 rounded-2xl border border-slate-200 bg-pink-50/50 p-5">
                  <div className="space-y-2">
                    {['Welcome email', 'Follow-up', 'Offer email'].map((label) => (
                      <div
                        key={label}
                        className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2"
                      >
                        <span className="flex items-center gap-2 text-xs font-medium text-slate-700">
                          <Mail
                            size={12}
                            strokeWidth={1.5}
                            className="text-pink-500"
                            aria-hidden="true"
                          />
                          {label}
                        </span>
                        <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-700">
                          Sent
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-pink-200/60 pt-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                      Sales
                    </p>
                    <p className="flex items-center gap-1 text-sm font-bold text-emerald-700">
                      <TrendingUp size={15} strokeWidth={2} aria-hidden="true" />
                      Automatic barh rahi hai
                    </p>
                  </div>
                </div>

                <ul className="mt-6 space-y-2.5">
                  {serviceBullets.email.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <CheckCircle2
                        size={16}
                        strokeWidth={1.5}
                        className="shrink-0 text-emerald-600"
                        aria-hidden="true"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* ========== PORTFOLIO ========== */}
        <section id="portfolio" className="border-t border-slate-200 px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-sky-700">Portfolio</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                HAMARA PORTFOLIO
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600">
                Real projects, real systems. Neeche se sample dekhein ke automation aur development
                ne kaise kaam kiya.
              </p>
              <a
                href="#projects"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-pink-400 px-10 py-5 text-lg font-bold text-slate-900 shadow-lg shadow-pink-200/70 transition-all duration-300 hover:-translate-y-0.5 hover:bg-pink-500 hover:shadow-2xl hover:shadow-pink-300/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                SAMPLE DEKHAIN
                <ArrowRight size={20} strokeWidth={2.5} aria-hidden="true" />
              </a>
            </div>

            <div id="projects" className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/portfolio/${project.slug}`}
                  className="group flex flex-col rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-100/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:p-10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-lg font-bold text-sky-700 transition-colors group-hover:bg-sky-500 group-hover:text-white">
                    {project.number}
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-slate-900 sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-sky-700">
                    Case study dekhein
                    <ArrowRight
                      size={15}
                      strokeWidth={2}
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ========== CREDENTIALS ========== */}
        <section
          id="credentials"
          className="border-t border-slate-200 bg-gradient-to-b from-pink-50/50 to-white px-6 py-20 md:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-sky-700">Background</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                Kaam ke peeche ka experience.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Full-stack development aur AI automation ka combination — PIAIC certified prompt
                aur context engineering ke saath.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                  <Sparkles size={20} strokeWidth={1.5} className="text-pink-500" aria-hidden="true" />
                  Credentials
                </h3>
                <div className="mt-6 space-y-5">
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-sky-600">
                      <BadgeCheck size={20} strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900">
                        Certified Prompt &amp; Context Engineer
                      </p>
                      <p className="text-sm text-slate-600">PIAIC</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-100 text-pink-600">
                      <GraduationCap size={20} strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900">ICS — Computer Science</p>
                      <p className="text-sm text-slate-600">Formal education in CS</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                  <Code2 size={20} strokeWidth={1.5} className="text-sky-600" aria-hidden="true" />
                  Skills &amp; Tools
                </h3>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {techStack.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-slate-200 bg-sky-50/60 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-sky-300 hover:text-sky-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== PROCESS ========== */}
        <section className="border-t border-slate-200 bg-gradient-to-b from-sky-50/60 to-white px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-sky-700">Process</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                Kaam kaise hota hai.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Simple, clear process — har step par aap ko pata hota hai kya ho raha hai.
              </p>
            </div>

            <ol className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sm font-bold text-sky-700">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 text-base font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ========== FAQ ========== */}
        <section id="faq" className="border-t border-slate-200 px-6 py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-sky-700">FAQ</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                Aam sawalat.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Kuch cheezein clear kar lein — baaki ke liye contact form use karein.
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Contact karein
                <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
              </a>
            </div>

            <div className="divide-y divide-slate-200 rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
              {faqs.map((faq) => (
                <details key={faq.question} className="group px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-bold text-slate-900 [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <ChevronDown
                      size={18}
                      strokeWidth={2}
                      aria-hidden="true"
                      className="shrink-0 text-sky-600 transition-transform duration-200 group-open:rotate-180"
                    />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ========== CONTACT ========== */}
        <section id="contact" className="border-t border-slate-200 px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-sky-700">
                Instant Connection
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                Seedha raabta karein.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Apne karobar ke liye hum se kaam karwaye — form bharein ya email karein, main
                jaldi reply karta hoon.
              </p>
              <p className="mt-2 text-sm font-medium text-slate-700">Email: {contact.email}</p>

              <div className="mt-8 flex justify-center">
                <a
                  href="#contact-form"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500 px-9 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-2xl hover:shadow-sky-200/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-auto"
                >
                  Contact Us
                  <ArrowRight size={19} strokeWidth={2} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 items-start gap-10 md:grid-cols-2">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <Image
                    src="/me.jpeg"
                    alt="Numan Ali"
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full object-cover ring-2 ring-pink-300"
                  />
                  <div>
                    <p className="font-semibold text-slate-900">{contact.name}</p>
                    <p className="text-sm text-slate-600">
                      AI Automation &amp; Full-Stack Developer
                    </p>
                  </div>
                </div>
                <p className="text-base font-light leading-relaxed text-slate-600">
                  Koi project ya business goal mind mein hai? Batayein — automation, ads, ya web
                  development, main aap ke liye sahi system design karta hoon.
                </p>
                <div className="space-y-4">
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-4 rounded-lg text-slate-600 transition-colors hover:text-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    <Mail size={20} strokeWidth={1.5} aria-hidden="true" />
                    <span className="text-sm font-medium">{contact.email}</span>
                  </a>
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-lg text-slate-600 transition-colors hover:text-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    <GitBranch size={20} strokeWidth={1.5} aria-hidden="true" />
                    <span className="text-sm font-medium">github.com/num453fh9-collab56</span>
                  </a>
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-lg text-slate-600 transition-colors hover:text-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    <ExternalLink size={20} strokeWidth={1.5} aria-hidden="true" />
                    <span className="text-sm font-medium">linkedin.com/in/nauman-ali</span>
                  </a>
                </div>
              </div>

              <div id="contact-form">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
