'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { services } from '@/lib/services';

const links = [
  { href: '/#services', label: 'Automation' },
  { href: '/#portfolio', label: 'Portfolio' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white';

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className={`rounded text-2xl font-bold tracking-tighter text-slate-900 ${focusRing}`}
        >
          Numan<span className="text-sky-500">.</span>
        </Link>

        <div className="hidden items-center gap-7 text-sm font-semibold text-slate-600 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setServicesOpen((value) => !value)}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              className={`flex items-center gap-1 rounded transition-colors hover:text-sky-600 ${focusRing}`}
            >
              Services
              <ChevronDown
                size={14}
                strokeWidth={2}
                aria-hidden="true"
                className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <div
              className={`absolute left-1/2 top-full w-[23rem] -translate-x-1/2 pt-3 transition-all duration-150 ${
                servicesOpen
                  ? 'visible translate-y-0 opacity-100'
                  : 'invisible -translate-y-1 opacity-0'
              }`}
            >
              <div className="grid grid-cols-2 gap-1 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/70">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    onClick={() => setServicesOpen(false)}
                    className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-sky-50 hover:text-sky-700"
                  >
                    {service.title}
                  </Link>
                ))}
                <Link
                  href="/services"
                  onClick={() => setServicesOpen(false)}
                  className="col-span-2 mt-1 flex items-center justify-between rounded-xl bg-slate-900 px-3 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-sky-600"
                >
                  Saari services dekhein
                  <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded transition-colors hover:text-sky-600 ${focusRing}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="-mr-2 flex h-11 w-11 items-center justify-center rounded-xl text-slate-900 transition-colors hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 md:hidden"
        >
          {open ? (
            <X size={22} strokeWidth={1.5} aria-hidden="true" />
          ) : (
            <Menu size={22} strokeWidth={1.5} aria-hidden="true" />
          )}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            <button
              type="button"
              onClick={() => setMobileServicesOpen((value) => !value)}
              aria-expanded={mobileServicesOpen}
              className="flex items-center justify-between rounded py-3 text-base font-semibold text-slate-700 transition-colors hover:text-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              Services
              <ChevronDown
                size={18}
                strokeWidth={2}
                aria-hidden="true"
                className={`transition-transform duration-200 ${
                  mobileServicesOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {mobileServicesOpen && (
              <div className="mb-2 ml-1 border-l border-slate-200 pl-4">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    onClick={() => {
                      setOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    className="block rounded py-2 text-sm font-medium text-slate-600 transition-colors hover:text-sky-600"
                  >
                    {service.title}
                  </Link>
                ))}
                <Link
                  href="/services"
                  onClick={() => {
                    setOpen(false);
                    setMobileServicesOpen(false);
                  }}
                  className="mt-1 block rounded py-2 text-sm font-semibold text-sky-700"
                >
                  Saari services dekhein
                </Link>
              </div>
            )}

            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded py-3 text-base font-semibold text-slate-700 transition-colors hover:text-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
