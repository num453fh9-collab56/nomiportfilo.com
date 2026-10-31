import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import WhatsAppFloat from "@/components/whatsapp-float";
import { contact, siteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Numan Ali | Web Development, AI Agents & Meta Ads";
const description =
  "Frontend aur backend development, custom AI agents, auto chat, email aur WhatsApp automation, aur Meta Ads — apne karobar ke liye hum se kaam karwaye.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Numan Ali",
  },
  description,
  keywords: [
    "Numan Ali",
    "frontend developer",
    "backend developer",
    "custom AI agents",
    "AI automation",
    "WhatsApp automation",
    "auto chat agents",
    "email automation",
    "Meta Ads",
    "website development",
    "full-stack developer",
    "Next.js developer",
  ],
  authors: [{ name: "Numan Ali" }],
  creator: "Numan Ali",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Numan Ali",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: contact.name,
      url: siteUrl,
      email: `mailto:${contact.email}`,
      image: `${siteUrl}/me.jpeg`,
      jobTitle: "AI Automation & Full-Stack Developer",
      sameAs: [contact.github, contact.linkedin],
      knowsAbout: [
        "Web Development",
        "Next.js",
        "React",
        "Python",
        "AI Agents",
        "WhatsApp Automation",
        "Email Automation",
        "Meta Ads",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: `${contact.name} — Web Development & AI Automation`,
      url: siteUrl,
      image: `${siteUrl}/me.jpeg`,
      email: contact.email,
      description:
        "Frontend aur backend development, custom AI agents, auto chat, email aur WhatsApp automation, aur Meta Ads.",
      areaServed: "Worldwide",
      founder: { "@id": `${siteUrl}/#person` },
      priceRange: "$$",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#top"
          className="sr-only rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60]"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
