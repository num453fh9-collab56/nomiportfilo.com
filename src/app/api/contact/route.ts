const MAX_NAME = 100;
const MAX_EMAIL = 200;
const MAX_MESSAGE = 5000;

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

const attempts = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (attempts.get(ip) ?? []).filter(
    (time) => now - time < RATE_LIMIT_WINDOW_MS,
  );

  if (recent.length >= RATE_LIMIT_MAX) {
    attempts.set(ip, recent);
    return true;
  }

  recent.push(now);
  attempts.set(ip, recent);
  return false;
}

function jsonError(error: string, status: number) {
  return Response.json({ error }, { status });
}

type ContactPayload = {
  name: string;
  email: string;
  service: string;
  message: string;
};

function parsePayload(body: unknown): ContactPayload | null {
  if (typeof body !== "object" || body === null) return null;

  const { name, email, service, message, website } = body as Record<
    string,
    unknown
  >;

  if (typeof website === "string" && website.trim() !== "") return null;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return null;
  }

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedService =
    typeof service === "string" ? service.trim().slice(0, 60) : "";
  const trimmedMessage = message.trim();

  if (
    trimmedName.length < 2 ||
    trimmedName.length > MAX_NAME ||
    trimmedEmail.length > MAX_EMAIL ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail) ||
    trimmedMessage.length < 10 ||
    trimmedMessage.length > MAX_MESSAGE
  ) {
    return null;
  }

  return {
    name: trimmedName,
    email: trimmedEmail,
    service: trimmedService,
    message: trimmedMessage,
  };
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return jsonError("Too many messages. Please try again later.", 429);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonError("Invalid request body.", 400);
  }

  const payload = parsePayload(body);
  if (!payload) {
    return jsonError("Please check your name, email, and message.", 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "num453fh9@gmail.com";
  const from = process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

  if (!apiKey) {
    return jsonError(
      "The contact form is not configured yet. Please email me directly.",
      503,
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: payload.email,
      subject: payload.service
        ? `Project inquiry (${payload.service}) from ${payload.name}`
        : `Portfolio message from ${payload.name}`,
      text: `${payload.message}\n\n---\nFrom: ${payload.name} <${
        payload.email
      }>${payload.service ? `\nService: ${payload.service}` : ""}`,
    }),
  });

  if (!response.ok) {
    console.error("Contact email failed with status", response.status);
    return jsonError(
      "Could not send the message right now. Please email me directly.",
      502,
    );
  }

  return Response.json({ ok: true });
}
