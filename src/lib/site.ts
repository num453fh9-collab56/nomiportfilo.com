export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
).replace(/\/$/, '');

export const contact = {
  name: 'Numan Ali',
  email: 'num453fh9@gmail.com',
  github: 'https://github.com/num453fh9-collab56',
  linkedin:
    'https://www.linkedin.com/in/nauman-ali-62b7103a8?utm_source=share_via&utm_content=profile&utm_medium=member_android',
};

function normalizeWhatsapp(raw: string) {
  const digits = raw.replace(/\D/g, '');
  if (digits.startsWith('0')) return `92${digits.slice(1)}`;
  if (digits.startsWith('92')) return digits;
  return digits;
}

const rawWhatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '03247363219';
const whatsappNumber = normalizeWhatsapp(rawWhatsapp);

const whatsappMessage = encodeURIComponent(
  'Assalam o Alaikum! Mujhe apne business ke liye services ke baare mein baat karni hai.',
);

export const whatsappHref = whatsappNumber
  ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  : `https://wa.me/?text=${whatsappMessage}`;
