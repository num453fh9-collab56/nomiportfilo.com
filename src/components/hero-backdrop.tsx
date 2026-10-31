import { Bot } from 'lucide-react';

const robots = [
  { left: '5%', top: '24%', size: 38, tone: 'text-sky-400/45', rotate: '-8deg', duration: '7s' },
  { left: '14%', top: '66%', size: 28, tone: 'text-pink-400/45', rotate: '6deg', duration: '9s' },
  { left: '38%', top: '12%', size: 24, tone: 'text-pink-400/40', rotate: '10deg', duration: '8s' },
  { right: '6%', top: '16%', size: 32, tone: 'text-pink-400/45', rotate: '8deg', duration: '10s' },
  { right: '16%', top: '74%', size: 40, tone: 'text-sky-400/40', rotate: '-6deg', duration: '8s' },
  { left: '30%', top: '82%', size: 22, tone: 'text-sky-400/40', rotate: '4deg', duration: '11s' },
];

export default function HeroBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* AI world — globe on the left */}
      <svg
        className="absolute -left-40 top-16 h-[520px] w-[520px] text-sky-300/80 sm:-left-32 sm:top-24 sm:h-[680px] sm:w-[680px]"
        viewBox="0 0 600 600"
        fill="none"
        stroke="currentColor"
      >
        <circle cx="300" cy="300" r="240" strokeWidth="1" strokeDasharray="2 9" />
        <circle cx="300" cy="300" r="240" strokeWidth="1" opacity="0.7" />
        <ellipse cx="300" cy="300" rx="240" ry="110" strokeWidth="1" opacity="0.6" />
        <ellipse cx="300" cy="300" rx="240" ry="55" strokeWidth="1" opacity="0.4" />
        <ellipse cx="300" cy="300" rx="110" ry="240" strokeWidth="1" opacity="0.6" />
        <ellipse cx="300" cy="300" rx="55" ry="240" strokeWidth="1" opacity="0.4" />
        <path
          d="M410 140 Q 500 220 470 300 T 380 460"
          strokeWidth="1"
          strokeDasharray="3 7"
          opacity="0.7"
        />
        <path
          d="M180 150 Q 110 220 120 330 T 200 470"
          strokeWidth="1"
          strokeDasharray="3 7"
          opacity="0.7"
        />
        {[
          [410, 140],
          [470, 300],
          [380, 460],
          [200, 470],
          [120, 330],
          [180, 150],
          [300, 62],
          [300, 538],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.5" fill="currentColor" stroke="none" />
        ))}
      </svg>

      {/* AI world — faint pink globe on the right */}
      <svg
        className="absolute -right-48 top-40 hidden h-[520px] w-[520px] text-pink-300/70 lg:block"
        viewBox="0 0 600 600"
        fill="none"
        stroke="currentColor"
      >
        <circle cx="300" cy="300" r="230" strokeWidth="1" strokeDasharray="2 10" />
        <ellipse cx="300" cy="300" rx="230" ry="100" strokeWidth="1" opacity="0.6" />
        <ellipse cx="300" cy="300" rx="100" ry="230" strokeWidth="1" opacity="0.6" />
        {[
          [420, 190],
          [360, 470],
          [150, 360],
          [240, 110],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" fill="currentColor" stroke="none" />
        ))}
      </svg>

      {/* Robots of the AI world — faint, also behind the copy */}
      {robots.map((bot) => (
        <Bot
          key={`${bot.left ?? bot.right}-${bot.top}`}
          strokeWidth={1.2}
          className={`absolute animate-pulse ${bot.tone}`}
          style={{
            left: bot.left,
            right: bot.right,
            top: bot.top,
            width: bot.size,
            height: bot.size,
            transform: `rotate(${bot.rotate})`,
            animationDuration: bot.duration,
          }}
        />
      ))}

      {/* Circular AI brain — centered on mobile, beside the copy on desktop */}
      <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 sm:top-[40%] lg:left-[72%] lg:top-[38%]">
        <div className="relative flex h-[340px] w-[340px] items-center justify-center sm:h-[520px] sm:w-[520px] lg:h-[640px] lg:w-[640px]">
          <div className="absolute inset-0 rounded-full border border-sky-200/90" />
          <div className="orbit-spin absolute inset-6 rounded-full border border-dashed border-pink-200/90 sm:inset-9" />
          <div className="absolute inset-10 rounded-full border border-sky-100 sm:inset-16" />
          <div className="absolute inset-20 rounded-full bg-white/40 blur-2xl" />

          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="relative h-[200px] w-[200px] sm:h-[310px] sm:w-[310px] lg:h-[380px] lg:w-[380px]"
          >
            <defs>
              <linearGradient
                id="brain-stroke"
                x1="0"
                y1="0"
                x2="24"
                y2="24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0EA5E9" />
                <stop offset="1" stopColor="#F472B6" />
              </linearGradient>
            </defs>
            <g
              stroke="url(#brain-stroke)"
              strokeWidth="0.14"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.9"
            >
              <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
              <path d="M9 13a4.5 4.5 0 0 0 3-4" />
              <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
              <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
              <path d="M6 18a4 4 0 0 1-1.967-.516" />
              <path d="M12 13h4" />
              <path d="M12 18h6a2 2 0 0 1 2 2v1" />
              <path d="M12 8h8" />
              <path d="M16 8V5a2 2 0 0 1 2-2" />
              <circle cx="16" cy="13" r=".5" />
              <circle cx="18" cy="3" r=".5" />
              <circle cx="20" cy="21" r=".5" />
              <circle cx="20" cy="8" r=".5" />
            </g>
          </svg>

          <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-sky-400 shadow-[0_0_16px_4px_rgba(14,165,233,0.35)]" />
          <span className="absolute bottom-8 right-12 h-2.5 w-2.5 rounded-full bg-pink-400 shadow-[0_0_14px_4px_rgba(244,114,182,0.35)]" />
          <span className="absolute left-10 top-1/3 h-2 w-2 rounded-full bg-sky-300" />
          <span className="absolute right-6 top-1/2 h-1.5 w-1.5 rounded-full bg-pink-300" />
        </div>
      </div>

      {/* Mobile wash — keeps the copy readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/25 to-white/80 lg:hidden" />
      {/* Desktop wash — clear on the right so the AI world shows, soft on the left copy */}
      <div className="absolute inset-0 hidden bg-gradient-to-r from-white/55 via-white/15 to-white/0 lg:block" />
      <div className="absolute inset-x-0 bottom-0 hidden h-1/3 bg-gradient-to-t from-white via-white/50 to-transparent lg:block" />
    </div>
  );
}
