'use client';

import { useState } from 'react';
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react';
import { contact, whatsappHref } from '@/lib/site';

type Status = 'idle' | 'sending' | 'success' | 'error';

const CONTACT_EMAIL = contact.email;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus('sending');
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          service: formData.get('service'),
          message: formData.get('message'),
          website: formData.get('website'),
        }),
      });

      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        throw new Error(data.error ?? 'Something went wrong. Please try again.');
      }

      form.reset();
      setStatus('success');
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.',
      );
      setStatus('error');
    }
  };

  const isSending = status === 'sending';

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-sky-100/60">
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />

        <div>
          <label
            htmlFor="contact-name"
            className="mb-2 block text-sm font-semibold text-slate-900"
          >
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            maxLength={100}
            autoComplete="name"
            className="w-full rounded-xl border border-slate-200 bg-sky-50/40 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="mb-2 block text-sm font-semibold text-slate-900"
          >
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            className="w-full rounded-xl border border-slate-200 bg-sky-50/40 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="contact-service"
            className="mb-2 block text-sm font-semibold text-slate-900"
          >
            Project type
          </label>
          <select
            id="contact-service"
            name="service"
            defaultValue=""
            className="w-full rounded-xl border border-slate-200 bg-sky-50/40 px-4 py-3 text-sm text-slate-900 transition-colors focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
          >
            <option value="">Select a service (optional)</option>
            <option value="Frontend Development">Frontend Development</option>
            <option value="Backend Development">Backend Development</option>
            <option value="AI Agents">AI Agents</option>
            <option value="Chat / WhatsApp Automation">Chat / WhatsApp Automation</option>
            <option value="Email Automation">Email Automation</option>
            <option value="Meta Ads">Meta Ads</option>
            <option value="Something else">Something else</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="mb-2 block text-sm font-semibold text-slate-900"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            minLength={10}
            maxLength={5000}
            className="w-full resize-none rounded-xl border border-slate-200 bg-sky-50/40 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
            placeholder="Apna project ya business goal likhein..."
          />
        </div>

        <button
          type="submit"
          disabled={isSending}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-sky-600 hover:shadow-2xl disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          {isSending ? (
            <>
              Sending
              <Loader2
                size={16}
                strokeWidth={1.5}
                className="animate-spin"
                aria-hidden="true"
              />
            </>
          ) : status === 'success' ? (
            <>
              Message Sent
              <CheckCircle2 size={16} strokeWidth={1.5} aria-hidden="true" />
            </>
          ) : (
            <>
              Send Message
              <Send size={16} strokeWidth={1.5} aria-hidden="true" />
            </>
          )}
        </button>

        <div aria-live="polite" className="min-h-5">
          {status === 'success' && (
            <p className="flex items-center gap-2 text-sm text-emerald-700">
              <CheckCircle2 size={16} strokeWidth={1.5} aria-hidden="true" />
              Thanks for reaching out. I&apos;ll reply soon.
            </p>
          )}
          {status === 'error' && (
            <p className="flex items-start gap-2 text-sm text-rose-600">
              <AlertCircle
                size={16}
                strokeWidth={1.5}
                className="mt-0.5 shrink-0"
                aria-hidden="true"
              />
              <span>
                {error}{' '}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-semibold underline underline-offset-2"
                >
                  Email me directly
                </a>
                .
              </span>
            </p>
          )}
        </div>

        <p className="text-center text-xs text-slate-500">
          Ya seedha{' '}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-sky-700 underline underline-offset-2"
          >
            WhatsApp par message karein
          </a>
          .
        </p>
      </form>
    </div>
  );
}
