import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, CheckCircle2, Mail, MessageCircle } from 'lucide-react';
import SiteNav from '@/components/site-nav';
import SiteFooter from '@/components/site-footer';
import { getProject, projects } from '@/lib/projects';
import { contact, siteUrl, whatsappHref } from '@/lib/site';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: 'Project not found' };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/portfolio/${project.slug}` },
    openGraph: {
      title: `${project.title} | Numan Ali`,
      description: project.summary,
      url: `/portfolio/${project.slug}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const otherProject = projects.find((item) => item.slug !== project.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.summary,
    url: `${siteUrl}/portfolio/${project.slug}`,
    author: { '@type': 'Person', name: contact.name, url: siteUrl },
    keywords: project.tags.join(', '),
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-pink-200 selection:text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
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
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-xs text-slate-500"
            >
              <Link href="/#portfolio" className="rounded transition-colors hover:text-sky-600">
                Portfolio
              </Link>
              <span aria-hidden="true">/</span>
              <span className="font-medium text-slate-700">{project.title}</span>
            </nav>

            <div className="mt-6 flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-lg font-bold text-sky-700">
                {project.number}
              </span>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700">
                {project.status}
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tighter text-slate-900 sm:text-5xl md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {project.overview}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-7 py-3.5 font-semibold text-[#052E16] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1FBE5A] hover:shadow-lg hover:shadow-emerald-200/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <MessageCircle size={18} strokeWidth={2} aria-hidden="true" />
                Aisa system chahiye?
              </a>
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
                Project overview
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{project.description}</p>
              <div className="mt-8 rounded-2xl border border-sky-200 bg-sky-50/60 p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sky-700">
                  Built with
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Highlights
              </h2>
              <ul className="mt-4 space-y-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2
                      size={18}
                      strokeWidth={1.5}
                      className="mt-0.5 shrink-0 text-emerald-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 px-6 py-14">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:p-8">
            <div className="text-center sm:text-left">
              <p className="text-lg font-bold text-slate-900">Aap ka project bhi aisa ho sakta hai.</p>
              <p className="mt-1 text-sm text-slate-600">
                Apne idea ya business problem ke baare mein baat karein.
              </p>
            </div>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-900 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-auto"
            >
              Baat karein
              <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
            </a>
          </div>

          <div className="mx-auto mt-10 flex max-w-5xl flex-col justify-between gap-4 text-sm sm:flex-row">
            <Link
              href="/#portfolio"
              className="flex items-center gap-2 font-semibold text-slate-600 transition-colors hover:text-sky-600"
            >
              <ArrowLeft size={16} strokeWidth={2} aria-hidden="true" />
              Saare projects
            </Link>
            {otherProject && (
              <Link
                href={`/portfolio/${otherProject.slug}`}
                className="flex items-center gap-2 font-semibold text-slate-600 transition-colors hover:text-sky-600"
              >
                Next: {otherProject.title}
                <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
              </Link>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
