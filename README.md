# Numan Ali — AI Automation Portfolio

Portfolio jo AI automation ke results ko multi-device screens par visible banata hai. Built with
Next.js (App Router), React, Tailwind CSS and TypeScript.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and fill in the values:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public site URL used for metadata, sitemap and robots |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number in international format, e.g. `923001234567` |
| `RESEND_API_KEY` | Resend API key for the contact form |
| `CONTACT_TO_EMAIL` | Inbox that receives contact form messages |
| `CONTACT_FROM_EMAIL` | Verified sender address (or `Portfolio <onboarding@resend.dev>`) |

If `NEXT_PUBLIC_WHATSAPP_NUMBER` is empty, the WhatsApp buttons open WhatsApp with a prefilled
message so the visitor can pick a contact. The contact form posts to
`src/app/api/contact/route.ts`, which sends messages through [Resend](https://resend.com).
Without `RESEND_API_KEY` the form shows a direct email fallback.

**Production note:** `onboarding@resend.dev` can only deliver to the Resend account owner's
email. To receive messages from any client, verify your domain in Resend, then set
`CONTACT_FROM_EMAIL` to an address on that domain (for example
`Portfolio <contact@yourdomain.com>`).

## Scripts

```bash
npm run dev     # development server
npm run lint    # ESLint
npm run build   # production build (type-checked)
npm start       # serve the production build
```

## Deploy checklist

1. Push to GitHub and import the repository on [Vercel](https://vercel.com/new).
2. Add the environment variables above in the Vercel project settings.
3. Set `NEXT_PUBLIC_SITE_URL` to the real domain (no trailing slash) so metadata, sitemap,
   robots and JSON-LD use the correct URLs.
4. Add `RESEND_API_KEY` and a verified `CONTACT_FROM_EMAIL`, then send a test message through the
   contact form.
5. Open `/sitemap.xml`, `/robots.txt` and the Open Graph preview to confirm they load.

## Content checklist

- `src/lib/projects.ts` — add real project details, links and outcomes. Each entry also gets a
  case-study page at `/portfolio/<slug>`.
- `src/lib/services.ts` — service copy, scope and process per service.
- `src/lib/faqs.ts` — FAQ questions and answers (also feeds the FAQ schema).
- `public/me.jpeg` — replace with the final profile photo.
- Testimonials and client logos are not added yet because they need real client quotes.
