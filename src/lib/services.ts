export type ServiceTone = 'sky' | 'pink';

export type ServiceIconName =
  | 'code'
  | 'server'
  | 'globe'
  | 'bot'
  | 'chat'
  | 'mail'
  | 'whatsapp'
  | 'megaphone';

export type Service = {
  slug: string;
  title: string;
  short: string;
  tagline: string;
  description: string;
  icon: ServiceIconName;
  tone: ServiceTone;
  includes: string[];
  process: { title: string; text: string }[];
  outcomes: string[];
};

export const services: Service[] = [
  {
    slug: 'frontend-development',
    title: 'Frontend Development',
    short: 'Fast, responsive aur pixel-perfect interfaces.',
    tagline: 'Har screen par smooth, fast aur professional UI.',
    description:
      'React aur Next.js ke saath hum aisi interfaces banate hain jo mobile se desktop tak har screen par perfect chalein. Speed, accessibility aur conversion par poora focus hota hai — design sirf khoobsurat nahi, kaam ka bhi hota hai.',
    icon: 'code',
    tone: 'sky',
    includes: [
      'Mobile-first responsive layouts',
      'Next.js aur React development',
      'Tailwind CSS styling aur design system',
      'Animations aur micro-interactions',
      'Speed optimization (Core Web Vitals)',
      'Accessibility aur SEO-friendly markup',
    ],
    process: [
      {
        title: 'Design review',
        text: 'Aap ke goals, brand aur reference designs ko samajh kar structure final karte hain.',
      },
      {
        title: 'Component development',
        text: 'Reusable components banate hain taake har page consistent aur maintainable rahe.',
      },
      {
        title: 'Integration aur testing',
        text: 'APIs, forms aur content connect karke har device par testing karte hain.',
      },
      {
        title: 'Launch aur support',
        text: 'Deploy karte hain, performance check karte hain aur zaroorat par support dete hain.',
      },
    ],
    outcomes: [
      'Har device par perfect layout',
      'Fast load times aur smooth scrolling',
      'Zyada conversions aur kam bounce rate',
      'Aasan future updates aur scaling',
    ],
  },
  {
    slug: 'backend-development',
    title: 'Backend Development',
    short: 'Secure APIs, databases aur business logic.',
    tagline: 'Aap ke system ki mazboot aur secure bunyad.',
    description:
      'Backend woh engine hai jo aap ka poora system chalata hai. Hum APIs, databases, authentication aur third-party integrations banate hain — aisa backend jo fast ho, secure ho aur automation ke liye ready ho.',
    icon: 'server',
    tone: 'pink',
    includes: [
      'REST APIs aur server-side logic',
      'Database design (PostgreSQL / MongoDB)',
      'Authentication, roles aur permissions',
      'Payment aur third-party integrations',
      'Admin dashboards aur reporting',
      'Security, validation aur error handling',
    ],
    process: [
      {
        title: 'Requirement mapping',
        text: 'Business rules, data aur integrations ko detail mein document karte hain.',
      },
      {
        title: 'Architecture aur schema',
        text: 'Database schema aur API structure design karte hain taake system scalable rahe.',
      },
      {
        title: 'Build aur integrate',
        text: 'APIs, auth aur integrations develop karke frontend aur agents se connect karte hain.',
      },
      {
        title: 'Deploy aur monitor',
        text: 'Production par deploy karte hain, logs aur performance monitor karte hain.',
      },
    ],
    outcomes: [
      'Reliable aur secure system',
      'Data safe aur properly structured',
      'Scalable architecture',
      'Automation aur AI agents ke liye ready',
    ],
  },
  {
    slug: 'websites',
    title: 'Websites',
    short: 'Business websites jo customers convert karein.',
    tagline: 'Aap ka online ghar — fast, modern aur trust-building.',
    description:
      'Business, portfolio ya e-commerce website — hum design se launch tak poora kaam karte hain. Har website mobile-friendly, SEO-ready aur lead generation ke liye optimized hoti hai.',
    icon: 'globe',
    tone: 'sky',
    includes: [
      'Business, portfolio aur e-commerce websites',
      'High-converting landing pages',
      'CMS ya easy content updates',
      'On-page SEO setup',
      'Google Analytics aur tracking',
      'Hosting aur domain guidance',
    ],
    process: [
      {
        title: 'Goal aur content plan',
        text: 'Website ka maqsad, audience aur pages ka plan tay karte hain.',
      },
      {
        title: 'Design',
        text: 'Aap ke brand ke mutabiq modern, clean aur conversion-focused design banate hain.',
      },
      {
        title: 'Build',
        text: 'Website develop karke content, forms aur tracking integrate karte hain.',
      },
      {
        title: 'Launch',
        text: 'SEO aur speed check ke baad website live karte hain aur guide dete hain.',
      },
    ],
    outcomes: [
      'Professional online presence',
      'Zyada leads aur enquiries',
      'Fast aur mobile-friendly experience',
      'Search engines par better visibility',
    ],
  },
  {
    slug: 'custom-ai-agents',
    title: 'Custom AI Agents',
    short: 'Aap ke business ke liye banaye gaye AI agents.',
    tagline: 'Repetitive kaam AI agents ke hawalay karein.',
    description:
      'Har business ka workflow alag hota hai. Hum aap ke process ko samajh kar custom AI agents banate hain jo research, follow-up, data entry aur operations jaise kaam automate karte hain — aap ke tools ke saath connected.',
    icon: 'bot',
    tone: 'pink',
    includes: [
      'Workflow aur process discovery',
      'Prompt aur tool-calling design',
      'LLM integration (OpenAI aur doosre models)',
      'Multi-step task automation',
      'Human handoff aur approval flows',
      'Monitoring aur performance dashboard',
    ],
    process: [
      {
        title: 'Process audit',
        text: 'Aap ke roz ke kaam dekh kar decide karte hain kaun se tasks automate hone chahiye.',
      },
      {
        title: 'Agent design',
        text: 'Agent ka role, tools, prompts aur guardrails design karte hain.',
      },
      {
        title: 'Build aur test',
        text: 'Agent develop karke real scenarios par test karte hain.',
      },
      {
        title: 'Deploy aur optimize',
        text: 'Live karte hain aur results ke hisaab se improve karte rehte hain.',
      },
    ],
    outcomes: [
      '24/7 kaam bina rukay',
      'Manual effort aur cost mein kami',
      'Consistent aur error-free output',
      'Business scale karne ke liye ready system',
    ],
  },
  {
    slug: 'auto-chat-agents',
    title: 'Auto Chat Agents',
    short: 'Website par 24/7 auto chat, zero missed leads.',
    tagline: 'Har visitor ka jawab, foran aur har waqt.',
    description:
      'Website par aane wala har visitor potential customer ho sakta hai. Auto chat agent un ke sawalon ka foran jawab deta hai, leads capture karta hai aur zaroorat par conversation ko WhatsApp ya aap tak forward karta hai.',
    icon: 'chat',
    tone: 'sky',
    includes: [
      'Website chat widget',
      'FAQ aur sales training',
      'Lead capture aur qualification',
      'WhatsApp ya human handoff',
      'Urdu aur English support',
      'Chat analytics aur transcripts',
    ],
    process: [
      {
        title: 'Q&A mapping',
        text: 'Aap ke business ke common sawal aur jawab tay karte hain.',
      },
      {
        title: 'Agent training',
        text: 'Agent ko aap ke products, tone aur sales process par train karte hain.',
      },
      {
        title: 'Widget integration',
        text: 'Website par chat widget lagate hain aur design match karte hain.',
      },
      {
        title: 'Go live aur tune',
        text: 'Live karke real chats ke hisaab se jawab aur flows improve karte hain.',
      },
    ],
    outcomes: [
      'Instant replies, din ho ya raat',
      'Zyada leads capture hoti hain',
      'Support load kam hota hai',
      'Behtar customer experience',
    ],
  },
  {
    slug: 'email-agents',
    title: 'Email Agents',
    short: 'Automated email sequences jo sales barhayein.',
    tagline: 'Follow-up ka intezar nahi — sab kuch automatic.',
    description:
      'Welcome email se lekar offer aur follow-up tak — hum aisi automated email sequences banate hain jo leads ko customers mein badal dein. Har email sahi waqt par, sahi person ko jati hai.',
    icon: 'mail',
    tone: 'pink',
    includes: [
      'Welcome aur nurture sequences',
      'Automatic follow-up flows',
      'Audience segmentation',
      'Professional email templates',
      'Deliverability setup (SPF / DKIM)',
      'Open, click aur conversion reporting',
    ],
    process: [
      {
        title: 'Funnel plan',
        text: 'Customer journey aur email touchpoints ka plan banate hain.',
      },
      {
        title: 'Copy aur templates',
        text: 'Aap ke brand tone mein emails likhte aur design karte hain.',
      },
      {
        title: 'Automation build',
        text: 'Sequences, triggers aur segmentation setup karte hain.',
      },
      {
        title: 'Test aur launch',
        text: 'Test emails bhej kar deliverability check karte hain, phir live karte hain.',
      },
    ],
    outcomes: [
      'Consistent follow-up bina manual kaam',
      'Zyada conversions aur sales',
      'Time aur effort ki bachat',
      'Clear reporting aur improvement',
    ],
  },
  {
    slug: 'whatsapp-agents',
    title: 'WhatsApp Agents',
    short: 'WhatsApp par auto replies, orders aur follow-ups.',
    tagline: 'Jahan customer hai, wahan aap ka agent.',
    description:
      'WhatsApp par auto replies, order updates aur follow-ups — customers ko foran jawab milta hai aur aap ka kaam automatic chalta hai. Business API ke saath professional aur reliable setup.',
    icon: 'whatsapp',
    tone: 'sky',
    includes: [
      'WhatsApp Business API setup',
      'Auto reply aur menu flows',
      'Order aur booking notifications',
      'Broadcast campaigns',
      'CRM aur sheet integration',
      'Human handoff aur chat history',
    ],
    process: [
      {
        title: 'Number aur API setup',
        text: 'WhatsApp Business API aur number verify karte hain.',
      },
      {
        title: 'Flow design',
        text: 'Sawal, replies, orders aur handoff ka flow banate hain.',
      },
      {
        title: 'Integration',
        text: 'Aap ke CRM, sheets ya store ke saath connect karte hain.',
      },
      {
        title: 'Launch aur monitor',
        text: 'Live karte hain aur messages ka performance monitor karte hain.',
      },
    ],
    outcomes: [
      'Instant response, 24/7',
      'Zyada orders aur enquiries',
      'Manual messaging kam',
      'Customer satisfaction behtar',
    ],
  },
  {
    slug: 'meta-ads',
    title: 'Meta Ads Specialist',
    short: 'Facebook aur Instagram ads — sahi audience, zyada sales.',
    tagline: 'Har rupee se zyada customers.',
    description:
      'Facebook aur Instagram par ads sirf chalane nahi, optimize karte hain. Sahi audience, strong creatives aur proper tracking ke saath aap ka ad budget waste nahi hota — sirf real customers tak pohnchta hai.',
    icon: 'megaphone',
    tone: 'pink',
    includes: [
      'Campaign strategy aur goal setting',
      'Audience research aur targeting',
      'Ad creatives aur copy',
      'Pixel aur conversion tracking',
      'A/B testing aur optimization',
      'Weekly performance reporting',
    ],
    process: [
      {
        title: 'Audit aur goal',
        text: 'Aap ka business, audience aur target cost per lead samajhte hain.',
      },
      {
        title: 'Campaign build',
        text: 'Campaigns, audiences aur creatives tayyar karte hain.',
      },
      {
        title: 'Launch aur optimize',
        text: 'Ads live karke daily performance ke hisaab se optimize karte hain.',
      },
      {
        title: 'Scale winners',
        text: 'Jo ads kaam karein un ka budget barhate hain aur naye tests chalate hain.',
      },
    ],
    outcomes: [
      'Kam cost per lead',
      'Zyada qualified customers',
      'Clear ROI aur reporting',
      'Consistent business growth',
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
