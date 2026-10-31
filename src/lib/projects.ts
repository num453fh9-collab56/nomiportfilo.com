export type Project = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  description: string;
  overview: string;
  features: string[];
  tags: string[];
  status: string;
};

export const projects: Project[] = [
  {
    slug: 'amir-hardware-paint-store',
    number: '01',
    title: 'Amir Hardware & Paint Store',
    summary:
      'Commercial inventory aur billing management system — stock, sales aur billing ek hi dashboard par.',
    description:
      'Commercial inventory aur billing management system — stock, sales aur billing ek hi dashboard par.',
    overview:
      'Hardware aur paint store ke rozmarra ke kaam ko ek hi system mein lane ke liye banaya gaya management dashboard. Stock, sales aur billing alag-alag registers ki jagah ek jagah se manage hoti hain, taake daily operations fast aur clear rahein.',
    features: [
      'Stock, sales aur billing ek hi dashboard par',
      'Billing process ke liye dedicated workflow',
      'Sales record aur stock visibility',
      'Rozmarra ke operations ke liye simple interface',
    ],
    tags: ['Next.js', 'React', 'Node.js', 'Database'],
    status: 'Delivered',
  },
  {
    slug: 'autonomous-ai-agent',
    number: '02',
    title: 'Autonomous AI Agent',
    summary:
      'Custom agent jo prompt engineering aur tool calling se tasks automate karta hai — smart workflow orchestration ke saath.',
    description:
      'Custom agent jo prompt engineering aur tool calling se tasks automate karta hai — smart workflow orchestration ke saath.',
    overview:
      'Ek custom AI agent jo instructions ko samajh kar tools use karta hai aur repeat hone wale tasks khud handle karta hai. Prompt architecture aur tool calling ko mila kar workflows automate kiye gaye hain, taake manual steps kam ho jayein.',
    features: [
      'Prompt engineering aur structured instructions',
      'Tool calling se real actions aur integrations',
      'Repeat tasks ka automation',
      'Workflow orchestration aur task sequencing',
    ],
    tags: ['Python', 'OpenAI', 'LLM APIs', 'Prompt Architecture'],
    status: 'Built & iterating',
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
